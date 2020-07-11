import {h, Component, Fragment} from "preact";
import {DateTime} from 'luxon';

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {dropdown: false, day_object: DateTime.fromISO(props.day)}
  }

  toggleDropdown() {
    this.setState(({dropdown}) => ({dropdown: !dropdown}))
  }

  render({code, code_long, code_info, description, room, staff, planned_size, start, weeks, toggle_select, selected},
         {dropdown, day_object}) {
    return (
      <div className="border-bottom border-secondary">
        <div className="d-flex align-items-stretch">
          <div className="mr-auto pl-3 pr-3 d-flex flex-column justify-content-center align-items-start">
            {code}
            {code_info && (
              <small className="text-muted">{code_info}</small>
            )}
          </div>
          <div className={"activity-select-toggle p-3 act-" + (selected?"selected":"not-selected")} onClick={() => toggle_select()}>
            {selected ? (<span>Selected</span>) : ("Unselected")}
          </div>
          <div className="activity-select-dropdown p-3" onClick={() => this.toggleDropdown()}>
            {dropdown ? (
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-up-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
              </svg>
            ):(
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            )}
          </div>
        </div>
        {dropdown && (
          <div className="border-top border-primary pt-2 pb-2">
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Long name:
              </div>
              <div className="col-sm-9">
                {code_long}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Description:
              </div>
              <div className="col-sm-9">
                {description}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Day:
              </div>
              <div className="col-sm-9">
                {day_object.toFormat('cccc')}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Time:
              </div>
              <div className="col-sm-9">
                {start}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Weeks*:
              </div>
              <div className="col-sm-9">
                {weeks.map(week => week+1).join(', ')}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Room:
              </div>
              <div className="col-sm-9">
                {room}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Staff:
              </div>
              <div className="col-sm-9">
                {staff}
              </div>
            </div>
            <div className="row m-0 pt-2 pb-2">
              <div className="col-sm-3 text-muted">
                Size:
              </div>
              <div className="col-sm-9">
                {planned_size}
              </div>
            </div>
            <div className="small text-muted pl-3">
              Something not seem right? You can edit this info later. *Where {day_object.toFormat('cccc')} of Week 1 is {day_object.toFormat('DD')}.
            </div>
          </div>
        )}
      </div>
    )
  }
}


export default class ActivitySelect extends Component {
  constructor(props) {
    super(props);
    this.state = {modules: props.modules}
  }

  toggle_select(moduleCode, activityIndex) {
    this.setState(({modules}) => ({
      modules: modules.map(module =>
        module.code !== moduleCode ? module : {
          ...module,
          activities: module.activities.map((activity, index) => index !== activityIndex ? activity : ({
            ...activity,
            selected: !activity.selected
          }))
      })
    }))
  }

  continue_click() {
    this.props.continue_callback(this.state.modules.map(
      module => ({
        ...module,
        activities: module.activities.filter(activity => activity.selected)
      })
    ))
  }

  render(_, {modules}) {
    return (
      <div className="mb-5">
        {modules.map(
          ({code, title, activities}) => (
            <div className="mb-5" key={code}>
              {title ? (
                <h3 className="border-left pl-3 text-light mb-2">{title} <small className="text-muted">{code}</small></h3>
              ):(
                <h3 className="border-left pl-3 text-light mb-2">{code}</h3>
              )}
              <div className="rounded-lg bg-light overflow-hidden">
                {!activities.length && <div className="p-3">This module has no activities.</div>}
                {activities.map(
                  activity => (
                    <Activity key={activity.id} toggle_select={() => this.toggle_select(code, activity.id)} {...activity} />
                  )
                )}
              </div>
            </div>
          )
        )}
        <button className="btn btn-lg btn-primary" onClick={() => this.continue_click()}>
          Continue
        </button>
        <div className="small text-muted">Once you click continue you cannot go back. To restart you must refresh the page.</div>
      </div>
    )
  }
}
