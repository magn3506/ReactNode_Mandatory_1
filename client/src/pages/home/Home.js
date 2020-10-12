import React, { Component } from 'react'

// LAYOUT COMPONENT
import Layout from "../../components/layout/layout";

// COMPONENTS
import TODO_LIST from "../../components/todo_list/Todo_list";
import CREATE_BUTTON from "../../components/create_btn/Create_btn";

// CALL_API FUNCITON
import call_api from "../../functions/call_api";


export class Home extends Component {
    constructor() {
        super();
        this.state = {
            todoes: [],
            isLoading: true,
        }

    }

    componentDidMount() {

        call_api("http://localhost:9000/api/todo")
            .then(response => {
                setTimeout(() => {
                    this.setState({
                        todoes: response.data.todoes,
                        isLoading: false
                    })
                }, 1000)
            })
    }

    handleUpdateTodoListAfterDelete = (newState) => {
        this.setState(newState)
    }

    render() {

        const { todoes, isLoading } = this.state;
        const Todo_list = isLoading ?
            "Loading"
            :
            <TODO_LIST
                todoes={todoes}
                history={this.props.history}
                state={this.state}
                onUpdateTodoListAfterDelete={this.handleUpdateTodoListAfterDelete}
            />

        return (
            <Layout logo nav >
                <ul>
                    {Todo_list}
                </ul>
                <CREATE_BUTTON />
            </Layout>

        );
    }

}

export default Home
