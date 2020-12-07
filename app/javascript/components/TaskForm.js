import React from "react"
import PropTypes from "prop-types"
class TaskForm extends React.Component {
  render () {
    return (
      
      <React.Fragment>
        <form id="task_form" action="/tasks" role="form" method="post">
            <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
            <div class="form-group">
                <label for="password">Title</label>
                <br/>
                <input type="text" class="form-control" id="title" name="title" placeholder="Enter the task title" />
            </div>
            <h6>Description</h6>
            <textarea name="description" form="task_form">Enter the description</textarea>
            <div class="form-group">
                <label for="time">Time</label>
                <br/>
                <input type="text" class="form-control" id="time" name="time" placeholder="Enter the time" />
            </div>
            <div class="form-group">
                <label for="location">Location</label>
                <br/>
                <input type="text" class="form-control" id="location" name="location" placeholder="Enter the location" />
            </div>
            <div class="text-center">
                <button type="submit" class="btn btn-primary mt-5 custombutton">Create</button>
            </div>
        </form>
        <button><a href='/tasks'>Go back</a></button>
      </React.Fragment>
    );
  }
}

TaskForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
};
export default TaskForm
