import React from "react"
import PropTypes from "prop-types"
class TaskItem extends React.Component {

  render () {
    const showUrl = "/tasks/" + this.props.id;
    const editUrl = "/tasks/" + this.props.id + "/edit";
    return (
      <React.Fragment>
        <tr key={this.props.id}>
        <td>
          
            <a href={showUrl}>{this.props.title}</a>
          
        </td>
        <td>
            <a href={editUrl}>Edit</a>
        </td>
        <td>
            <a href={showUrl} data-method="delete" data-confirm="Are you sure about this?">Delete</a>
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
