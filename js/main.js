import {MODULES} from "./consts";
import Noty from 'noty';
import ActivitySelect from './activity_select';
import ActivityEdit from "./activity_edit";
import {h, render} from 'preact';
import {DateTime} from 'luxon';
import {generateICSString} from './ics';

// TODO: Replace JSX classname formatting stuff with the npm classnames library
// TODO: Add set calendar color

// Relevant elements
const start_fieldset = $('#start-fieldset');
const start_form = $('#start-form');
const module_select = $('#module-select');
const loading_box = $('#loading-box');
const sign_in_box = $('#sign-in-box');
const sign_in_fieldset = $('.sign-in-fieldset');
const btn_sign_in_continue = $('#btn-sign-in-continue');
const btn_no_sign_in_continue = $('#btn-no-sign-in-continue');
const activity_select_box = $('#activity-select-box');
const activity_select_container = document.getElementById('activity-select-container');
const activity_select_fieldset = $('#activity-select-fieldset');
const activity_edit_box = $('#activity-edit-box');
const activity_edit_container = document.getElementById('activity-edit-container');
const activity_edit_fieldset = $('#activity-edit-fieldset');
const final_box_google = $('#final-box-google');
const final_box_non_google = $('#final-box-non-google');

// State transition code
// How to display when you are before, on or after the current state
const STATES = [
  {  // State 0: Start Form
    before: () => start_fieldset.attr('disabled', true),
    on: () => start_fieldset.attr('disabled', false),
    after: () => start_fieldset.attr('disabled', true)
  },
  {  // State 1: Loading
    before: () => loading_box.css('display', 'none'),
    on: () => loading_box.css('display', 'flex'),
    after: () => loading_box.css('display', 'none')
  },
  {  // State 2: Google sign in
    before: () => {
      sign_in_box.css('display', 'block');
      sign_in_fieldset.attr('disabled', true)
    },
    on: () => {
      sign_in_box.css('display', 'block');
      sign_in_fieldset.attr('disabled', false)
    },
    after: () => {
      sign_in_box.css('display', 'none');
      sign_in_fieldset.attr('disabled', false)
    },
  },
  {  // State 3: Activity Select
    before: () => {
      activity_select_box.css('display', 'block');
      activity_select_fieldset.attr('disabled', true)
    },
    on: () => {
      activity_select_box.css('display', 'block');
      activity_select_fieldset.attr('disabled', false)
    },
    after: () => {
      activity_select_box.css('display', 'none');
      activity_select_fieldset.attr('disabled', false)
    },
  },
  {  // State 4: Activity Edit
    before: () => {
      activity_edit_box.css('display', 'block');
      activity_edit_fieldset.attr('disabled', true)
    },
    on: () => {
      activity_edit_box.css('display', 'block');
      activity_edit_fieldset.attr('disabled', false)
    },
    after: () => {
      activity_edit_box.css('display', 'none');
      activity_edit_fieldset.attr('disabled', false)
    }
  },
  {  // State 5: Final box!
    before: () => {  // Not going to happen but whatever
      if(use_google) {
        final_box_google.css('display', 'flex');
        final_box_non_google.css('display', 'none');
      } else {
        final_box_google.css('display', 'none');
        final_box_non_google.css('display', 'flex');
      }
    },
    on: () => {
      if(use_google) {
        final_box_google.css('display', 'flex');
        final_box_non_google.css('display', 'none');
      } else {
        final_box_google.css('display', 'none');
        final_box_non_google.css('display', 'flex');
      }
    },
    after: () => {
      final_box_google.css('display', 'none');
      final_box_non_google.css('display', 'none')
    }
  }
]
function goToState(state_index){
  // Turn off all except
  STATES.slice(0, state_index).forEach(
    state => state.before()
  )
  STATES[state_index].on()
  STATES.slice(state_index+1).forEach(
    state => state.after()
  )
}

let previouslySelected = [];
try {
  previouslySelected = JSON.parse(window.localStorage.getItem('selectedModuleCodes'));
  if (!Array.isArray(previouslySelected))
    previouslySelected = [];
  if (previouslySelected.length > 0)
    new Noty({
      type: 'info',
      text: "You had previously selected modules, we selected them again for you.",
      layout: "bottomLeft",
      timeout: 4000
    }).show();
} catch (error) {

}
// Code that runs on page load
// Add the modules to the select
Object.values(MODULES).forEach(({code, title}) => (
  module_select.append($('<option>', {
    value: code, text: code + (title ? ' - '+title : ''),
    selected: previouslySelected.indexOf(code) !== -1
  }))
))
module_select.multi({
  non_selected_header: 'Modules',
  selected_header: 'Selected Modules',
  search_placeholder: 'Search Modules... Try MATH1 or ANTH3...'
});  // Activate multiselect magic


// Form callback
start_form.on('submit', event => {
  event.preventDefault();
  const term = $("input[name='check-term']:checked").val();
  const module_codes = $(module_select).val();
  window.localStorage.setItem('selectedModuleCodes', JSON.stringify(module_codes));

  if (!module_codes.length) {
    new Noty({
      type: 'error',
      text: "You must select at least one module to continue.",
      layout: "bottomLeft",
      timeout: 3000
    }).show();
    return;
  }

  const module_promises = module_codes.map(
    module_code => fetch(`data/module_${module_code.replace('/', '_')}.json`).then(r => r.json())
  )

  goToState(1);

  // Try to load all the modules
  Promise.all(module_promises).then(
    modules => displayGoogleSignIn(modules, term)
  ).catch(err => {
    console.log(err);
    new Noty({
      type: 'error',
      text: "There was an error loading the modules. Please try again.",
      layout: "bottomLeft",
      timeout: 3000
    }).show();
    goToState(0);
  })
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayGoogleSignIn(modules, term) {
  input_cal_name.val(`${capitalizeFirstLetter(term)} Timetable`)
  goToState(2);
  window.scrollBy(0, 120);
  btn_sign_in_continue.on('click', () => displayActivitySelect(modules, term, true))
  btn_no_sign_in_continue.on('click', () => displayActivitySelect(modules, term, false))
}

let use_google = null;

function displayActivitySelect(modules, term, google_chosen) {
  use_google = google_chosen;

  const new_modules = modules.map(
    ({code, title, ...module}) => ({
      code,
      title,
      activities: module[`activities_${term}`].map(
        activity => ({
          ...activity,
          selected: (activity.type.toLowerCase().startsWith('lec'))
        })
      )
    })
  )
  render(h(ActivitySelect, {modules: new_modules, continue_callback: displayActivityEdit}, null), activity_select_container)
  goToState(3);
  window.scrollBy(0, 120);
}


function displayActivityEdit(selected_modules) {
  selected_modules = selected_modules.filter(activity => activity.length !== 0).map(
    module => ({
      ...module,
      activities: module.activities.map(
        activity => ({
          ...activity,
          title: `${activity.type} ${activity.description.trim() || module.title.trim() || (!activity.type.includes(module.code) ? '' : module.code)}`,
          cal_description:
`Staff: ${activity.staff}
Planned size: ${activity.planned_size}
Code: ${activity.code_long}
Description: ${activity.description}`,
          color: null,
          timings: activity.weeks.map(
            week =>
              DateTime.fromISO(activity.day+'T'+activity.start, {zone: 'Europe/London'})
              .plus({weeks: week})
              .toISO({suppressMilliseconds: true, suppressSeconds: true, includeOffset: false}) + ' UNTIL ' + activity.end
          ).join('\n')
        })
      )
    })
  )
  console.log(selected_modules)
  render(h(ActivityEdit, {modules: selected_modules, continue_callback: almostThere, event_colors, use_google}, null), activity_edit_container)
  goToState(4);
  window.scrollBy(0, 120);
}

let final_module_list;

function almostThere(modules) {
  final_module_list = modules;
  goToState(5);
  window.scrollBy(0, 120);
}

function save(filename, data) {
  var blob = new Blob([data], {type: 'text/calendar'});
  if(window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  }
  else{
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}

$('#btn-non-magic').on('click', () => {
  save('Durham Calendar.ics', generateICSString(final_module_list));
})

// Google shit
const CLIENT_ID = '441729039045-0lrc1sftdpb99imsgffs3r0962qd9r5v.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCqa7dvJqL3nU-L8QkfVaD4NmmlC7QbydU';
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar"

const select_notif = $('#select-notifications');
const input_cal_name = $('#input-cal-name');
const btn_authorize = $('#btn-authorize');
const btn_magic = $('#btn-magic');
const btn_sign_out_1 = $('#btn-sign-out-1');
const btn_sign_out_2 = $('#btn-sign-out-2');

let event_colors = {}  // Google's event colours, when loaded, will be stored in this variable.
let calendar_colors = {}  // Google's calendar colors, when loaded, will be stored in this variable.

function updateGoogleSignInStatus(isSignedIn) {
  if (isSignedIn) {
    btn_authorize.attr('disabled', true);
    btn_sign_in_continue.attr('disabled', false);
    btn_magic.attr('disabled', false);
    btn_sign_out_1.attr('disabled', false);
    btn_sign_out_2.attr('disabled', false);

    gapi.client.calendar.colors.get().then(json => {
      event_colors = json.result.event;
      calendar_colors = json.result.calendar;
    }).catch(err => {
      console.log(err);
      new Noty({
        type: 'error',
        layout: 'bottomLeft',
        text: 'Loading colors failed. Sign out and sign back into Google to try again.',
        timeout: 2000
      })
    })
  } else {
    btn_authorize.attr('disabled', false);
    btn_sign_in_continue.attr('disabled', true);
    btn_magic.attr('disabled', true);
    btn_sign_out_1.attr('disabled', true);
    btn_sign_out_2.attr('disabled', true);
  }
}

function handleGoogleClientLoad() {
  gapi.load('client:auth2', initGoogleClient)
}

setTimeout(handleGoogleClientLoad, 0)

function googleSignOut() {
  gapi.auth2.getAuthInstance().signOut();
}

function initGoogleClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Set the button to listen for signed in state changes
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateGoogleSignInStatus)

    // Update it to the current signed in state
    updateGoogleSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
    btn_authorize.on('click', () => {
      gapi.auth2.getAuthInstance().signIn().catch(() => {
        new Noty({
          type: 'error',
          layout: 'bottomLeft',
          text: 'Google sign in failed. Please try again.',
          timeout: 2000
        }).show();
      });
    })
    btn_magic.on('click', handleMagicClick);
    btn_sign_out_1.on('click', googleSignOut);
    btn_sign_out_2.on('click', googleSignOut);
  }).catch(err => {
    console.log(err);
    new Noty({
      type: 'error',
      layout: 'bottomLeft',
      text: 'Google magic failed. Google Log In won\'t work.'
    }).show();
  })
}

function handleMagicClick() {
  btn_magic.attr('disabled', true);

  let generatedCalendar;
  gapi.client.calendar.calendars.insert({
    summary: input_cal_name.val(),
    timeZone: 'Europe/London'
  }).then(json => {
    generatedCalendar = json.result;
    new Noty({
      type: 'success',
      layout: 'bottomLeft',
      text: 'New calendar successfully created!',
      timeout: 4000
    }).show();

    // Deal with setting notifications
    if(select_notif.val() !== 'none'){
      gapi.client.calendar.calendarList.patch({
        calendarId: generatedCalendar.id,
        defaultReminders: [
          {
            method: 'popup',
            minutes: parseInt(select_notif.val())
          }
        ]
      }).then(json => {
        new Noty({
          type: 'success',
          layout: 'bottomLeft',
          text: 'Sucessfully changed the notification settings!',
          timeout: 4000
        }).show();
      }).catch(err => {
        console.log(err)
        new Noty({
          type: 'error',
          layout: 'bottomLeft',
          text: 'Some error setting the notification settings, you will have to set it manually.',
          timeout: 4000
        }).show();
      })
    }

    // Now add the events
    let eventBatch = gapi.client.newBatch();

    final_module_list.forEach(
      module => module.activities.forEach(
        ({title, room, cal_description, final_timings, color}) =>
          final_timings.forEach(
            timing => {
            const event = {
              calendarId: generatedCalendar.id,
              summary: title,
              location: room,
              colorId: color && color.color_id,
              description: cal_description,
              ...timing,
              reminders: {
                useDefault: true
              }
            };
            const request = gapi.client.calendar.events.insert(event);
            eventBatch.add(request)
          }
        )
      )
    )

    eventBatch.then(json => {
      console.log(json)
      new Noty({
        type: 'success',
        layout: 'bottomLeft',
        text: 'It worked!!!!',
        timeout: 4000
      }).show();
    }).catch(err => {
      console.log(err);
      btn_magic.attr('disabled', false);
      new Noty({
        type: 'error',
        layout: 'bottomLeft',
        text: 'Error creating the events. I would recommend manual deletion of the calendar and trying again.',
        timeout: 4000
      }).show();
    })
  }).catch(err => {
    console.log(err)
    new Noty({
      type: 'error',
      layout: 'bottomLeft',
      text: 'Some problem creating the calendar :S',
      timeout: 4000
    }).show();
    btn_magic.attr('disabled', false);
  })
}
