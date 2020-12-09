import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core" 
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import './TaskForm.css';

class TaskForm extends React.Component {
  /*
  <form id="task_form" action={this.props.task_path} role="form" method="post">
              
              <input type="hidden" name="_method" value={method} />
              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <div class="form-group">
                  <label for="password">Title</label>
                  <br/>
                  
              <textarea name="title" form="task_form" placeholder="Enter the title">{this.props.title}</textarea>
              </div>
              <h6>Description</h6>
              <textarea name="description" form="task_form" placeholder="Enter the description">{this.props.description}</textarea>
              <div class="form-group">
                  <label for="time">Time</label>
                  <br/>
                  <textarea name="time" form="task_form" placeholder="Enter the time">{this.props.time}</textarea>
              </div>
              <div class="form-group">
                  <label for="location">Location</label>
                  <br/>
                  <textarea name="location" form="task_form" placeholder="Enter the location">{this.props.location}</textarea>
              </div>
              <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-5 custombutton">Create or edit</button>
              </div>
          </form>
          <button><a href='/tasks'>Go back</a></button>
  */
  render () {
    //const titleHint = this.props.title === null ? 'Enter the title' : this.props.title;
    //const descriptionHint = this.props.description === null ? 'Enter the description' : this.props.description;
    //const timeHint = this.props.time === null ? 'Enter the time' : this.props.time;
    //const locationHint = this.props.location === null ? 'Enter the location' : this.props.location;
    let method;
    if(this.props.action === 'new') {
      method = "post"; 
    } else if (this.props.action === 'edit') {
      method = "put";
    }
    
      return (
        <React.Fragment>
          <form id="task_form" action={this.props.task_path} role="form" method="post">
              
              <input type="hidden" name="_method" value={method} />
              <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
              <Paper elevation={5}>
                <div class="form-group">
                  <label for="title">Title</label>
                  <br/>
                  <TextField required id="title" name="title" label="Enter the title" defaultValue={this.props.title} placeholder="Enter the title"/>
                </div>
              </Paper>
              <Paper elevation={5}>
              <div class="form-group">
                <label for="description">Description</label>
                <br/>
                <TextField
                  id="description"
                  name="description"
                  label="Enter the description"
                  multiline
                  rowsMax={100}
                  defaultValue={this.props.description}
                  placeholder="Enter the description"
                  fullWidth
                  required
                />
              </div>
              </Paper>
              <Paper elevation={5}>
              <div class="form-group">
                  <label for="time">Time</label>
                  <br/>
                  <TextField required id="time" name="time" label="Enter mm/dd/yyyy" defaultValue={this.props.time} placeholder="Enter mm/dd/yyyy"/>
              </div>
              </Paper>
              
              <Paper elevation={5}>
              <div class="form-group">
                  <label for="location">Location</label>
                  <br/>
                  <TextField
                    id="location"
                    name="location"
                    label="Enter the location"
                    multiline
                    rowsMax={100}
                    defaultValue={this.props.location}
                    placeholder="Enter the location"
                    fullWidth
                    required
                  />
              </div>
              </Paper>
              
              <div class="text-center">
                  <Button type="submit" color="primary" variant="outlined">Create or edit</Button>
              </div>
          </form>
          <br/>
          <hr/>
          <Button type="submit" color="secondary" variant="outlined"><a href='/tasks'>Go back</a></Button>
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
