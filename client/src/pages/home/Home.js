import React, { Component } from 'react'

// LAYOUT COMPONENT
import Layout from "../../components/layout/layout";

// COMPONENTS
import TODO_LIST from "../../components/todo_list/Todo_list";
import CREATE_BUTTON from "../../components/create_btn/Create_btn";




export class Home extends Component {
    constructor() {
        super();
        this.state = {
            todoes: [],
            isLoading: true,
        }

    }

    componentDidMount() {
        fetch('http://localhost:9000/api/todo')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todoes: data.todoes,
                    isLoading: false
                })
            });

        console.log()
    }

    render() {

        const { todoes, isLoading } = this.state;
        const Todo_list = isLoading ? "Loading" : <TODO_LIST todoes={todoes} history={this.props.history} />

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
