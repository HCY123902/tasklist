import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  render () {
    const editPath = this.props.task_path + "/edit";
    const addTypePath = this.props.task_type_path;
    const taskTypeList = JSON.parse(this.props.task_types);

    const categoryList = taskTypeList.map((taskType, count) => {
      const deleteUrl = addTypePath + "/" + taskTypeList[count].id;

      return (
        <li key={count}>
          {taskType.category}
          <a href={deleteUrl} data-method="delete" data-confirm="Are you sure about this?">Delete</a>
        </li>
      );
    })

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

        <h2>Existing categories</h2>
        <ul>
          {categoryList}
        </ul>
        

        <h2>Add a comment:</h2>
        <form id="task_type_form" action={addTypePath} role="form" method="post">
        <input type='hidden' name='authenticity_token' value={this.props.authenticity_token} />
        <input type="hidden" name="task_id" value={this.props.task_id} />
          <div class="form-group">
              <label for="category">Task type</label>
              <select name="category" id="category">
                        <option value="School">School</option>
                        <option value="Work">Work</option>
                        <option value="CCA">CCA</option>
              </select>
          </div>
          <div class="text-center">
                  <button type="submit" class="btn btn-primary mt-5 custombutton">Add</button>
          </div>
          
        </form>


        <button><a href={editPath}>Edit</a></button>
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
