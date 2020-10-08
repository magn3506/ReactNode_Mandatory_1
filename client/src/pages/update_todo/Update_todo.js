import React, { Component } from 'react';
import LAYOUT from "../../components/layout/layout";
import { Link } from "react-router-dom";

// FETCH
import fetchPost from "../../functions/fetchPost";

// CSS
import "../create_todo/Create_todo.css";

// IMPORT ICONS
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { AiTwotoneBank } from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const categoryArr = [
    {
        category: "job",
        iconComponent: <FaBusinessTime />
    },
    {
        category: "home",
        iconComponent: <AiOutlineHome />
    },
    {
        category: "school",
        iconComponent: <MdSchool />
    },
    {
        category: "economy",
        iconComponent: <AiTwotoneBank />
    },
    {
        category: "vacation",
        iconComponent: <IoIosAirplane />
    },
    {
        category: "shopping",
        iconComponent: <AiOutlineShoppingCart />
    }

]


export class Create_todo extends Component {

    constructor() {
        super();
        this.state = {
            todo: {
                todo: '',
                icon: ''
            },
            isLoading: true
        }
    }

    componentDidMount() {

        const { id } = this.props.match.params;
        const targetID = id;


        fetch(`http://localhost:9000/api/todo/${targetID}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todo: {
                        todo: data.data.todo,
                        icon: data.data.icon
                    },
                    isLoading: false
                })
            });
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
        console.log(this.state.todo);

        const { todo, icon } = this.state.todo;

        if (todo !== undefined && icon !== undefined) {
            console.log("CREATE TODO");
            this.setState({
                isVallid: true
            })

            console.log("UPDATE")

            const { id } = this.props.match.params;
            const targetID = id;

            fetchPost(`http://localhost:9000/api/todo/${targetID}`, "PATCH", this.state.todo);
            // REDIRECT
            this.props.history.push("/")

            return;
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
            <LAYOUT title="UPDATE TODO">
                <div className="Error_Message">
                    {ErrMsg}
                </div>
                <form className="create_todo_form">
                    <label className="create_todo_task_label" htmlFor="name"  >Write Your Task
                    <input className="create_todo_tasl_input" placeholder="Write your todo here..." value={this.state.todo.todo} name="todo" type="text" onChange={(e) => this.handleTodoInputChange(e)} />
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
