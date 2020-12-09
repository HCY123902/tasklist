import React from "react"
import PropTypes from "prop-types"
import './TaskList.css';
import { Button } from "@material-ui/core" 

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

class Task extends React.Component {
  render () {
    const editPath = this.props.task_path + "/edit";
    const addTypePath = this.props.task_type_path;
    const taskTypeList = JSON.parse(this.props.task_types);

    const categoryList = taskTypeList.map((taskType, count) => {
      const deleteUrl = addTypePath + "/" + taskTypeList[count].id;
      
      return (
        <li key={count}>
          <Button class={taskType.category}>
          {taskType.category}
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button class="category-button">
            <a href={deleteUrl} data-method="delete" data-confirm="Are you sure about this?">Delete</a>
          </Button>
        </li>
      );
    })

    return (
      <React.Fragment>
        <div class="flex-container">

          <div class="left-panel">
            <h2>Existing categories</h2>
            <ul>
              {categoryList}
            </ul>
            <hr/>

            <h2>Add a category</h2>
            <form id="task_type_form" action={addTypePath} role="form" method="post">
            <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
            <input type="hidden" name="task_id" value={this.props.task_id} />
              <div class="form-group">
                  <label for="category">Task type</label>
                  <br/>
                  <select name="category" id="category">
                            <option value="School">School</option>
                            <option value="Work">Work</option>
                            <option value="CCA">CCA</option>
                  </select>
              </div>
              <br/>
              <div class="text-center">
                <Button type="submit" color="primary" variant="outlined">Add</Button>
              </div>
              
            </form>
            <br/>

            <Button color="primary" variant="outlined"><a href={editPath}>Edit</a></Button>
            &nbsp;&nbsp;&nbsp;
            <Button color="secondary" variant="outlined"><a href='/tasks'>Go back</a></Button>
          </div>

          <div class="right-panel">
            <p>
              <strong>Title:</strong>
              <br/>
              <Paper>
                {this.props.title}
              </Paper>
              
            </p>
      
            <p>
              <strong>Description:</strong>
              <br/>
              <Paper>
              {this.props.description}
              </Paper>
              
            </p>

            <p>
              <strong>Time:</strong>
              <br/>
              <Paper>
              {this.props.time}
              </Paper>
              
            </p>
      
            <p>
              <strong>Location:</strong>
              <br/>
              <Paper>
              {this.props.location}
              </Paper>
              
            </p>
          </div>

        </div>
        
      </React.Fragment>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string
};
export default Task
