import React from "react"
import PropTypes from "prop-types"
class TaskItem extends React.Component {

  render () {
    const showUrl = "/tasks/" + this.props.id;
    const editUrl = "/tasks/" + this.props.id + "/edit";
    return (
      <React.Fragment>
        <tr key={taskList[0].id}>
        <td>
          
            <a href={showUrl}>{taskList[0].title}</a>
          
        </td>
        <td>
            <a href={editUrl}>Edit</a>
        </td>
        <td>
            <a href={showUrl}>Delete</a>
        </td>
        </tr>
      </React.Fragment>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};
export default TaskItem
