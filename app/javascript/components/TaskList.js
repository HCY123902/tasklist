import React from "react"
import PropTypes from "prop-types"
import TaskItem from "./TaskItem";
class TaskList extends React.Component {
  render () {
    console.log('-------------------------------------------------' + this.props.tasks);
    const taskList = JSON.parse(this.props.tasks);
    const array = new Array();
    for (let i = 0; i < taskList.length; i = i + 1) {
      array[i] = {
        title: taskList[i].title, 
        description: taskList[i].description, 
        time: taskList[i].time, 
        location: taskList[i].location, 
        id: taskList[i].id
      };
    }
    const mapping = array.map((task, count) => {

      const showUrl = "/tasks/" + task.id;
      const editUrl = "/tasks/" + task.id + "/edit";
      
        return (
          <tr key={task.id}>
        <td>
          
            <a href={showUrl}>{task.title}</a>
          
        </td>
        <td>
            <a href={editUrl}>Edit</a>
        </td>
        <td>
            <a href={showUrl}>Delete</a>
        </td>
        </tr>
        );
      
    })
    return (
      <React.Fragment>
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
