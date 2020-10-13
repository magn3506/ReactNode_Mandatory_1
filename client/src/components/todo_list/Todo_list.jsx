import React, { Component } from 'react'
import TODO_LIST_ITEM from "./Todo_list_item";
import DELETE_WARNING from "./Delete_warning.jsx";


// CSS
import "./Todo_list.css";

// CALL_API FUNCITON
import call_api from "../../functions/call_api";


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

        this.props.onUpdateTodoListAfterDelete({
            isLoading: true
        })

        // HIDE DELETE WARNING
        this.setState({
            isDeleteWarningShowing: false,
            deleteWarningTargetTodoObj: undefined,
        })

        // CALL DELETE API

        call_api(`/api/todo/${targetTodoId}`, {
            method: "DELETE",
        }).then(response => {

            if (response.status === 200) {
                // AFTER DELETE GET NEW LIST AND UPDATE STATE
                call_api("/api/todo")
                    .then(response => {

                        if (response.status === 200) {
                            // UPDATE STATE IN PARENT COMPONENT 
                            setTimeout(() => {
                                this.props.onUpdateTodoListAfterDelete({
                                    todoes: response.data.todoes,
                                    isLoading: false
                                })
                            }, 500)
                        }
                    })
            }
        })
    }

    render() {

        // PROPS
        const { todoes } = this.props;

        // STATE
        const { isDeleteWarningShowing, deleteWarningTargetTodoObj } = this.state;

        const todo_list_items = todoes.map(todo =>
            <TODO_LIST_ITEM
                key={todo.id}
                todo={todo}
                onDeleteWarningShow={this.handleDeleteWarningShow}
            />)

        const delete_warning = isDeleteWarningShowing
            &&
            <DELETE_WARNING
                onCancelDeleteWarning={this.handleCancelDeleteWarning}
                onDeleteTodo={this.handeDeleteTodo}
                todo={deleteWarningTargetTodoObj}
            />

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
                {delete_warning}
            </>
        )
    }
}

export default Todo_list
