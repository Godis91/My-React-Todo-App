import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <a
          className="waves-effect waves-light btn-floating pulse indigo modal-trigger tooltipped"
          data-position="bottom"
          data-tooltip="click to add new Todos"
          href="#modal1"
        >
          <i className="material-icons">add</i>
        </a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label htmlFor="content">Add Todo</label>
                <input
                  type="text"
                  id="content"
                  onChange={this.handleChange}
                  value={ this.state.content }
                />
              </div>
              <div className="input-field center">
                <button
                  className="btn-small indigo modal-close "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddTodo
