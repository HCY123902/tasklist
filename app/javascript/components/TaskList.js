import React from "react"
import PropTypes from "prop-types"
import TaskItem from "./TaskItem";
import './TaskList.css';
import { Button } from "@material-ui/core" 

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


class TaskList extends React.Component {
  /*
  <table border = "1" cellspacing="10" cellpadding="5" frame = "hsides" align = "center">
              <tr>
                <th>Current tasks</th>
                <th colspan = "2">Action</th>
              </tr>
              {mapping}
            </table>
  */

  render () {
    console.log('-------------------------------------------------' + this.props.tasks);
    const taskList = JSON.parse(this.props.tasks);
    //const taskList = this.props.tasks;
    /*
    const array = new Array();
    for (let i = 0; i < taskList.length; i = i + 1) {
      
      array[i] = {
        title: taskList[i].title, 
        description: taskList[i].description, 
        time: taskList[i].time, 
        location: taskList[i].location, 
        id: taskList[i].id
      };
      
      
      array.push(
       <TaskItem title={taskList[i].title} id={taskList[i].id}/>
      )
      
    }
    */
    
    const mapping = taskList.map((task, count) => {

        //const showUrl = "/tasks/" + task.id;
        //const editUrl = "/tasks/" + task.id + "/edit";
      
        return (
          <TaskItem title={taskList[count].title} id={taskList[count].id}/>
        );
    })

    //const classes = useStyles();

    if (mapping.length === 0) {
      return (
        <React.Fragment>
        <div className="new-task-button">
          <Button color="primary" variant="outlined"><a href='/tasks/new'>Add a new task</a></Button>
        </div>
        <div>
          <h2>
            There are not tasks currently, add a task by clicking "Add a new task".
          </h2>
        </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        <div class="flex-container">
          <div class="left-panel">
            <form id="task_search_form" action='/tasks' role="form" method="get">
              <label for="search_category">Task type</label>
              <br/>
              <select name="search_category" id="search_category">
                <option value="All">All</option>
                <option value="School">School</option>
                <option value="Work">Work</option>
                <option value="CCA">CCA</option>
              </select>
              <br/>
              <br/>
              <label for="search_title">Task title</label>
              <br/>
              <TextField id="search_title" label="Enter the title" type="search" name="search_title"/>
              <br/>
              <br/>
              <div class="text-center">
                <Button type="submit" color="primary" variant="outlined">Search</Button>
              </div>
            </form>
          </div>

          <div class="right-panel">
            <div className="new-task-button">
              <Button color="primary" variant="outlined"><a href='/tasks/new'>Add a new task</a></Button>
            </div>
            <div>
              <Grid container spacing={1}>
                <Grid item xs={8}>Current tasks</Grid>
                <Grid item xs={4}>Action</Grid>
                {mapping}
              </Grid>
            </div>
            

            
            <Button color="secondary" variant="outlined"><a href='/welcome/index'>Go back</a></Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TaskList
