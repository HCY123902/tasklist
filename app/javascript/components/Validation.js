import React from "react"
import PropTypes from "prop-types"
class Validation extends React.Component {
  render () {
    //const errorList = JSON.parse(this.props.errors);

    if (this.props.error_count) {
      const messages = this.props.errors.map((message, count) => {
        return (
          <li key={count}>
            {message}
          </li>
        );
      })
  
      return (
        <React.Fragment>
          <h3>{this.props.error_count} error prevents this article from being saved</h3>
          <ul>
            {messages}
          </ul>
        </React.Fragment>
      );
    } else {
      return (
        <h3>Please note the enter format when creating or editing task</h3>
      );
    }

    
  }
}

export default Validation
