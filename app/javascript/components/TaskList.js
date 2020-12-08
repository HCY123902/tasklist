import React from "react"
import PropTypes from "prop-types"
import TaskItem from "./TaskItem";
import './TaskList.css';

class TaskList extends React.Component {
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

    if (mapping.length === 0) {
      return (
        <React.Fragment>
        <div className="new-task-button">
          <button><a href='/tasks/new'>Add a new task</a></button>
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
        <div className="new-task-button">
          <button><a href='/tasks/new'>Add a new task</a></button>
        </div>
        <form id="task_search_form" action='/tasks' role="form" method="get">
          <label for="search_category">Task type</label>
          <select name="search_category" id="search_category">
            <option value="All">All</option>
            <option value="School">School</option>
            <option value="Work">Work</option>
            <option value="CCA">CCA</option>
          </select>
          <div class="text-center">
            <button type="submit" class="btn btn-primary mt-5 custombutton">Search</button>
          </div>
        </form>

        <table border = "1" cellspacing="10" cellpadding="5" frame = "hsides" align = "center">
          <tr>
            <th>Current tasks</th>
            <th colspan = "2">Action</th>
          </tr>
          {mapping}
        </table>
        <button><a href='/welcome/index'>Go back</a></button>
      </React.Fragment>
    );
  }
}

export default TaskList
