import React from "react"
import PropTypes from "prop-types"
import { Button } from "@material-ui/core" 
import { makeStyles } from '@material-ui/core/styles';
import './TaskList.css';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class TaskItem extends React.Component {
  /*
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
  */
  
  
  
  render () {
    const showUrl = "/tasks/" + this.props.id;
    const editUrl = "/tasks/" + this.props.id + "/edit";
    //const classes = useStyles();
    return (
      <React.Fragment>
        <Grid container item xs={12} spacing={2} key={this.props.id}>
          <Grid item xs={8}>
            
              <Paper elevation={3}>
                <Container>
                  <a href={showUrl}>{this.props.title}</a>
                </Container>
              </Paper>
            
          </Grid>
          <Grid item xs={2}>
            <Container>
            <Paper elevation={0}>
              <Button color="primary" variant="outlined">
                <a href={editUrl}>Edit</a>
              </Button>
            </Paper>
            </Container>
            
            
          </Grid>
          <Grid item xs={2}>
            <Container>
            <Paper elevation={0}>
              <Button color="secondary" variant="outlined">
                <a href={showUrl} data-method="delete" data-confirm="Are you sure about this?">Delete</a>
              </Button>
            </Paper>
            </Container>
            
            
            
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

TaskItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
};
export default TaskItem
