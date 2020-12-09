import React from "react"
import PropTypes from "prop-types"
import { Button, Container } from "@material-ui/core"
import './TaskList.css';

import Paper from '@material-ui/core/Paper';

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1 class="message">Welcome</h1>
        <div class="message">
          <div class="entry">
            {this.props.greeting}
            <hr/>
            <Button color="primary" variant="outlined"><a href='/tasks'>Enter the task list</a></Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
