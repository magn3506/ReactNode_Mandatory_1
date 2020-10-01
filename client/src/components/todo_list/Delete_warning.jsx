import React, { Component } from 'react';
import { ImWarning } from 'react-icons/im';

// CSS
import "./Delete_warning.css";

export class Delete_warning extends Component {
    render() {
        return (
            <div className="warning_bg">
                <div className="warning_tile">
                    <ImWarning className="warning_icon" />
                    <div className="warning_text">
                        Are you sure you want to delete?
                    </div>
                    <div className="warning_task">
                        Todo Task: "{this.props.todo.todo}"
                    </div>
                    <div className="warning_btn_container">
                        <button onClick={(e) => { this.props.onCancelDeleteWarning(e) }} className="warning_cancel_btn button_small">CANCEL</button>
                        <button onClick={(e) => { this.props.onDeleteTodo(e, this.props.todo.id) }} className="warning_delete_btn button_small">DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Delete_warning
