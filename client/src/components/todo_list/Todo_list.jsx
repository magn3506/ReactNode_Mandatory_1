import React, { Component } from 'react'
import TODO_LIST_ITEM from "./Todo_list_item";
import DELETE_WARNING from "./Delete_warning.jsx";


// CSS
import "./Todo_list.css";

export class Todo_list extends Component {

    constructor() {
        super();
        this.state = {
            isDeleteWarningShowing: false,
            deleteWarningTargetTodoObj: undefined,
        }
    }

    handleDeleteWarningShow = (event, todoObj) => {
        event.preventDefault();
        this.setState({
            isDeleteWarningShowing: true,
            deleteWarningTargetTodoObj: todoObj
        })
    }

    handleCancelDeleteWarning = (event) => {
        event.preventDefault();
        this.setState({
            isDeleteWarningShowing: false,
            deleteWarningTargetTodoObj: undefined
        })
    }

    handeDeleteTodo = (event, targetTodoId) => {
        event.preventDefault();
        console.log("DELETE FROM DB WITH ID:" + targetTodoId);
    }

    render() {

        const { todoes } = this.props;

        const todo_list_items = todoes.map(todo => <TODO_LIST_ITEM key={todo.id} todo={todo} onDeleteWarningShow={this.handleDeleteWarningShow} />)

        return (
            <>
                <div className="todo_list_header_container">
                    <div className="Todo_list_title">Todo List</div>
                    <div className="Todo_list_number">{todoes.length}</div>
                </div>
                <ul className="todo_list_contianer">
                    {todo_list_items}
                </ul>
                <div className="todo_list_spacer"></div>
                {this.state.isDeleteWarningShowing && <DELETE_WARNING onCancelDeleteWarning={this.handleCancelDeleteWarning} onDeleteTodo={this.handeDeleteTodo} todo={this.state.deleteWarningTargetTodoObj} />}
            </>
        )
    }
}

export default Todo_list
