import React, { Component } from 'react';
import LAYOUT from "../../components/layout/layout";
import { Link } from "react-router-dom";

// IMPORT ICONS
import categoryArr from "../../assets/icons/icons_object";

// FETCH
import call_api from "../../functions/call_api";

// CSS
import "./Create_todo.css";


export class Create_todo extends Component {

    constructor() {
        super();
        this.state = {
            todo: {
                todo: undefined,
                icon: undefined
            }
        }
    }


    handleSelectCategory = (event, category) => {
        event.preventDefault();
        this.setState({
            todo: {
                todo: this.state.todo.todo,
                icon: category
            },
            errMsg: undefined,
            isVallid: false
        })

    }

    handleTodoInputChange = (event) => {
        event.preventDefault()
        this.setState({
            todo: {
                todo: event.target.value,
                icon: this.state.todo.icon
            }
        })
    }

    handleValidationError = () => {

        const { todo, icon } = this.state.todo;

        if (!icon && !todo) {
            this.setState({
                errMsg: "Please write a todo and choose a category"
            })
            return;
        }

        if (!todo) {
            this.setState({
                errMsg: "Please write a todo"
            })
            return;
        }

        if (!icon) {
            this.setState({
                errMsg: "Please choose a category"
            })
            return;
        }
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        const { todo, icon } = this.state.todo;

        if (todo !== undefined && icon !== undefined) {
            console.log("CREATE TODO");
            this.setState({
                isVallid: true
            })

            call_api("http://localhost:9000/api/todo", {
                method: "POST",
                body: JSON.stringify(this.state.todo),
            }).then(response => {
                if (response.status === 200) {
                    // REDIRECT
                    this.props.history.push("/")
                }
            });

        } else {

            this.handleValidationError();
        }

    }

    render() {

        const category_icons = categoryArr.map((cat, index) => {
            return (
                <div key={index}
                    className={`create_category_icon ${this.state.todo.icon === cat.category && "isSelected"}`}
                    onClick={(e) => this.handleSelectCategory(e, cat.category)
                    }
                >
                    { cat.iconComponent}
                    < div className="category_title" > {cat.category}</div >
                </div >
            )
        })


        const categoryTitle = this.state.todo.icon ? this.state.todo.icon : "Choose a Category"


        const ErrMsg = this.state.errMsg && this.state.errMsg;

        return (
            <LAYOUT title="CREATE TODO">
                <div className="Error_Message">
                    {ErrMsg}
                </div>
                <form className="create_todo_form">
                    <label className="create_todo_task_label" htmlFor="name">Write Your Task
                    <input className="create_todo_tasl_input" placeholder="Write your todo here..." name="todo" type="text" onChange={(e) => this.handleTodoInputChange(e)} />
                    </label>
                    <hr />
                    <div className="catagory_title">{categoryTitle}</div>
                    <div className="catagory_container">
                        {category_icons}
                    </div>
                    <hr />
                    <div className="create_todo_btn_container">
                        <button className="button" onClick={(e) => { this.handleSubmitForm(e) }}>CREATE</button>
                        <Link to="/" className="create_todo_cancel_btn button">CANCEL</Link>
                    </div>

                </form>
            </LAYOUT>
        )
    }
}

export default Create_todo
