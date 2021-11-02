import {Component} from 'react';
import {addTodo} from "../actions/index";
import { connect } from 'react-redux';
import TodoAdd from "./TodoAdd"
import Panel from "./Panel"


class TodoList extends Component {
    render() {
        return(
            <div>
                <Panel title="Todo-Liste">
                    <ul>
                        {this.props.todos.map((todo) => {
                            return (
                                <li key={todo.id}>{todo.title}</li>
                            )
                        })}
                    </ul>
                </Panel>
                <TodoAdd onAdd={(title) => {this.props.addTodo(title)}} />
                
            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {
    addTodo: addTodo
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;