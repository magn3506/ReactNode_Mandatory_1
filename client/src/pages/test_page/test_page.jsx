import React, { Component } from 'react'

import call_api from "../../functions/call_api.js";

import SPINNER from "../../components/spinner/spinner";

export class Test_page extends Component {


    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }


    componentDidMount() {

        call_api("http://localhost:9000/api/todo")
            .then(data => {
                console.log(data)
            })

    }

    handleGetSingleTodo = () => {

        call_api("http://localhost:9000/api/todo/1").then(data => {
            console.log(data)
        })
    }

    handlePostTodo = () => {
        call_api("http://localhost:9000/api/todo", {
            method: "POST",
            body: JSON.stringify({ todo: "THIS IS FROM TEST PAGE", icon: "job" }),
        }).then(data => {
            console.log(data)
        })
    }

    handlePatchTodo = () => {
        call_api("http://localhost:9000/api/todo/3", {
            method: "PATCH",
            body: JSON.stringify({ todo: "THIS IS FROM TEST PAGE UPDATED", icon: "home" }),
        }).then(data => {
            console.log(data)
        })
    }

    handleDeleteTodo = () => {
        // SET LOADING TRUE
        call_api("http://localhost:9000/api/todo/2", {
            method: "DELETE",
        }).then(data => {
            console.log(data)
            // SET STATE LOADING FALSE
            // SET STATE DATA = DATA
        })
    }

    render() {

        return (
            <div>
                <h1>This is a test page</h1>
                <button onClick={() => { this.handleGetSingleTodo() }}>GET SINGLO TODO</button>
                <button onClick={() => { this.handlePostTodo() }}>POST TODO</button>
                <button onClick={() => { this.handlePatchTodo() }}>PATCH / UPDATE TODO</button>
                <button onClick={() => { this.handleDeleteTodo() }}>DELETE</button>

                <div>
                    {this.state.isLoading && <SPINNER />}
                </div>
            </div>
        )
    }
}

export default Test_page;