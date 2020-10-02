import React, { Component } from 'react';
import LAYOUT from "../../components/layout/layout";
import { Link } from "react-router-dom";

// CSS
import "./Create_todo.css";

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
                todo: undefined,
                icon: undefined
            }
        }
    }


    handleSelectCategory = (event, category) => {
        event.preventDefault();
        this.setState({
            todo: {
                icon: category
            }
        })

    }

    handleTodoInputChange = (event) => {
        event.preventDefault()
        this.setState({
            todo: {
                todo: event.target.value
            }
        })
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




        return (
            <LAYOUT title="CREATE TODO">
                <form className="create_todo_form" action="">
                    <label className="create_todo_task_label" htmlFor="name">Write Your Task
                    <input className="create_todo_tasl_input" placeholder="Write your todo here..." name="todo" type="text" onChange={(e) => this.handleTodoInputChange(e)} />
                    </label>
                    <hr />
                    <div className="catagory_container">
                        {category_icons}
                    </div>
                    <hr />
                    <div className="create_todo_btn_container">
                        <button className="button" type="submit">CREATE</button>
                        <Link to="/" className="create_todo_cancel_btn button">CANCEL</Link>
                    </div>

                </form>
            </LAYOUT>
        )
    }
}

export default Create_todo
