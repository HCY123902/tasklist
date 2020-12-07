import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    return (
      <React.Fragment>
        <p>
          <strong>Title:</strong>
          <br/>
          {this.props.title}
        </p>
  
        <p>
          <strong>Description:</strong>
          <br/>
          {this.props.description}
        </p>

        <p>
          <strong>Time:</strong>
          <br/>
          {this.props.time}
        </p>
  
        <p>
          <strong>Location:</strong>
          <br/>
          {this.props.location}
        </p>
        <button><a href='/tasks'>Go back</a></button>
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
