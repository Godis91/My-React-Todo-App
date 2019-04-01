import React from 'react'

function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? 
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          { todo.content }
          <a href="#!" onClick={ () => {deleteTodo(todo.id )}} className="secondary-content"><i className="material-icons red-text">delete</i></a>
        </div>
      )
    })
  : (
    <p className="center">You have no Todos left</p>
  )
  return (
    <div className="collection">
      { todoList }
    </div>
  )
}

export default Todos
