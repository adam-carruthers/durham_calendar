import {h, Component, Fragment} from 'preact';
import {DateTime} from "luxon";
import Noty from 'noty';

class EditableActivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete_sure: false,
      edit_timings: false,
      color_dropdown: false,
      unique_id: props.module_code.replace('/', '-').replace(' ', '') + '-' + props.id,
      day_object: DateTime.fromISO(props.day)
    }
  }

  setPropertyBool(prop, value=true) {
    this.setState({[prop]: value})
  }

  render({id, title, room, cal_description, code_info, weeks, max_week, start, end, timings,
           change_property, delete_activity, event_colors, color, use_google},
         {delete_sure, edit_timings, unique_id, day_object, color_dropdown}) {
    return (
      <div className="rounded-lg bg-light overflow-hidden mb-3 pt-2 pb-2">
        <div className="form-group row m-0 pt-2 pb-2">
          <label for={`activity-edit-title-${unique_id}`} className="col-sm-2">Title:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id={`activity-edit-title-${unique_id}`} value={title}
                   onInput={e => change_property('title', e.target.value)} />
          </div>
        </div>
        <div className="form-group row m-0 pt-2 pb-2">
          <label htmlFor={`activity-edit-room-${unique_id}`} className="col-sm-2">Room:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id={`activity-edit-room-${unique_id}`} value={room}
                   onInput={e => change_property('room', e.target.value)}/>
          </div>
        </div>
        <div className="form-group row m-0 pt-2 pb-2">
          <label htmlFor={`activity-edit-description-${unique_id}`} className="col-sm-2">Description:</label>
          <div className="col-sm-10">
            <textarea rows={5} type="text" className="form-control" id={`activity-edit-description-${unique_id}`}
                      value={cal_description} onInput={e => change_property('cal_description', e.target.value)}/>
          </div>
        </div>
        {edit_timings && (
          <div className="form-group row m-0 pt-2 pb-2">
            <label htmlFor={`activity-edit-timings-${unique_id}`} className="col-sm-2">Timings:</label>
            <div className="col-sm-10">
              <textarea rows={5} type="text" className="form-control" id={`activity-edit-timings-${unique_id}`}
                        value={timings} onInput={e => change_property('timings', e.target.value)}/>
                        <small className="form-text text-muted">
                          The format of the timings must be EXACTLY correct.
                          For example, times must be in 24 hour format.
                          The information below won't change as you edit the timings.
                          However, it will be changed in the calendar.
                        </small>
            </div>
          </div>
        )}
        {code_info && (
          <div className="d-flex">
            <div className="p-3 pl-4">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation-diamond-fill"
                   fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                      d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            </div>
            <div className="mr-auto p-3 pl-0">
              {code_info}
            </div>
          </div>
        )}
        <div className="d-flex">
          <div className="p-3 pl-4">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-clock-fill" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            </svg>
          </div>
          <div className="mr-auto p-3 pl-0">
            This activity runs from <b>{start}</b> to <b>{end}</b>
          </div>
        </div>
        <div className="d-flex">
          <div className="p-3 pl-4">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar2-week" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm-2 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-1zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
            </svg>
          </div>
          <div className="mr-auto p-3 pl-0">
            The activity takes place on a <b>{day_object.toFormat('cccc')}</b>.<br/>
            {day_object.toFormat('cccc')} of Week 1 is {day_object.toFormat('DD')}.<br/>
            The activity is on weeks:
            <div className="d-flex flex-wrap mt-2">
              {[...Array(max_week).keys()].map(
                i => (
                  <div key={i} className={"activity-edit-week"+(weeks.includes(i) ? ' activity-active-week' : '')}>
                    {i+1}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="pl-3 pr-3 w-100">
          <button className="btn btn-warning mr-3 mb-2" onClick={() => this.setPropertyBool('edit_timings', true)}>Edit Timings</button>
          {delete_sure ? (
            <button className="btn btn-danger mr-3 mb-2" onClick={() => delete_activity()}>You sure?</button>
          ) : (
            <button className="btn btn-danger mr-3 mb-2" onClick={() => this.setPropertyBool('delete_sure', true)}>Delete Activity</button>
          )}
          {use_google &&
            <button className={"mb-2 btn"+(color ? "" : " btn-dark")}
                    style={color && {'background-color': color.background}}
                    onClick={() => this.setPropertyBool('color_dropdown', true)}>
              Override color (currently {color ? "this" : "not set"})
            </button>
          }
        </div>
        {color_dropdown && (
          <div className="d-flex flex-wrap pl-3 pr-3 pt-2">
            {
              Object.entries(event_colors).map(([color_id, ev_color]) => (
                <div className="activity-color-pick rounded-circle mr-2 mb-2"
                     style={{'background-color': ev_color.background}}
                     onClick={() => {
                       change_property("color", {
                         color_id: color_id,
                         background: ev_color.background,
                         foreground: ev_color.foreground
                       });
                       this.setPropertyBool('color_dropdown', false)
                     }} />
              ))
            }
          </div>
        )}
      </div>
    )
  }
}

function youFuckedIt() {
  new Noty({
    type: 'error',
    text: "The timings aren't formatted correctly. You cannot continue until you fix it. (I warned you...)",
    layout: "bottomLeft",
    timeout: 3000
  }).show()
}

export default class ActivityEdit extends Component {
  constructor(props) {
    super(props);
    const max_week = Math.max(...props.modules.map(module => Math.max(...module.activities.map(activity => Math.max(...activity.weeks))))) + 1;
    this.state = {
      modules: props.modules,
      max_week
    }
  }

  continue_click() {
    // First convert and check the dates are okay
    let incorrect_datetime = false;
    const output_modules = this.state.modules.map(
      module => ({
        ...module,
        activities: module.activities.map(
          activity => ({
            ...activity,
            final_timings: activity.timings.split('\n').map(
              line => {
                const split_line = line.split('UNTIL')
                if (split_line.length !== 2 || split_line[1].trim().length !== 5) {
                  incorrect_datetime = true;
                  console.log('SPLIT LINE ISSUE')
                  return;
                }
                const start = DateTime.fromISO(split_line[0].trim(), {zone: 'Europe/London'})
                const end = DateTime.fromISO(split_line[0].trim().slice(0, -5)+split_line[1].trim(), {zone: 'Europe/London'})
                if (!start.isValid || !end.isValid || start.toMillis() >= end.toMillis()) {
                  console.log('OTHER ISSUE')
                  incorrect_datetime = true;
                  return;
                }
                return {
                  start: {
                    dateTime: start.toISO({suppressMilliseconds: true}),
                    timeZone: 'Europe/London'
                  },
                  end: {
                    dateTime: end.toISO({suppressMilliseconds: true}),
                    timeZone: 'Europe/London'
                  }
                }
              }
            )
          })
        )
      })
    )
    if (incorrect_datetime){
      youFuckedIt();
      return;
    }
    this.props.continue_callback(output_modules);
  }

  change_property(module_code, activity_id, property, new_value) {
    this.setState(({modules}) => ({modules: modules.map(
      module => module.code !== module_code ? module : {
        ...module,
        activities : module.activities.map(
          activity => activity.id !== activity_id ? activity : {
            ...activity,
            [property]: new_value
          }
        )
      }
      )}))
  }

  delete_activity(module_code, activity_id) {
    this.setState(({modules}) => ({modules: modules.map(
        module => module.code !== module_code ? module : {
          ...module,
          activities : module.activities.filter(activity => activity.id !== activity_id)
        }
      )}))
  }

  change_color_of_module(module_code, color) {
    this.setState(({modules}) => ({modules: modules.map(
      module => module.code !== module_code ? module : {
        ...module,
        activities : module.activities.map(activity => ({
          ...activity,
          color
        }))
      }
      )}))
  }

  render({event_colors, use_google}, {modules, max_week}) {
    return (
      <div className="mb-5">
        {modules.map(
          ({code, title, activities}) => (
            <div className="mb-5" key={code}>
              {title ? (
                <h3 className="border-left pl-3 text-light mb-2">{title} <small className="text-muted">{code}</small>
                </h3>
              ) : (
                <h3 className="border-left pl-3 text-light mb-2">{code}</h3>
              )}
              <div className="rounded-lg font-weight-bold bg-light overflow-hidden mb-1 pt-2 pb-2 pl-3 pr-3">
                Set color of all activities (e.g. lectures, tutorials, seminars) in this module at once:
                <div className="d-flex flex-wrap pt-2">
                  {
                    use_google ? (
                      Object.entries(event_colors).map(([color_id, ev_color]) => (
                        <div className="activity-color-pick rounded-circle mr-2 mb-2"
                             style={{'background-color': ev_color.background}}
                             onClick={() => this.change_color_of_module(code, {
                               color_id: color_id,
                               background: ev_color.background,
                               foreground: ev_color.foreground
                             })} />
                      ))
                    ) : (
                      "Colors only available if you use Sign In with Google"
                    )
                  }
                </div>
              </div>
              {activities.map(
                activity => (
                  <EditableActivity key={activity.id} max_week={max_week} module_code={code} event_colors={event_colors}
                                    use_google={use_google} change_property={(property, new_value) =>
                                      this.change_property(code, activity.id, property, new_value)}
                                    delete_activity={() => this.delete_activity(code, activity.id)}
                                    {...activity} />
                )
              )}
            </div>
          )
        )}
        <button className="btn btn-lg btn-primary" onClick={() => this.continue_click()}>
          Continue
        </button>
        <div className="small text-muted">
          Once you click continue you cannot go back. To restart you must refresh the page.
        </div>
      </div>
    )
  }
}
