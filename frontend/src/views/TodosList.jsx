
import React from 'react'
import './TodosList.scss'
import { Link } from '@reach/router'
import AddTodo from '../components/AddTodo'
import {connect } from 'react-redux'
import { completeTodo, deleteTodo } from '../store/actions'



class TodosList extends React.Component {



    render() {
        return (
            <div className="TodosList">
                <AddTodo/>
                <div className="allTodos">
                    {this.props.todos.map(todo => (
                        <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
                            <span className="text">{todo.text}</span>
                            <div className="actions">
                                <button onClick={() => this.props.onCompleted(todo)}> {todo.completed ? '✅' : '✔'}</button>
                                <button onClick={() => this.props.onDeleteTodo(todo.id)}>❌</button>
                                <button><Link to={'/todo/' + todo.id}> ✏</Link> </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )



    }
}

function mapStateToProps (state) {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => ({
    onCompleted: completeTodo(dispatch),
    onDeleteTodo: deleteTodo(dispatch)
  })


export default connect(mapStateToProps, mapDispatchToProps)(TodosList);