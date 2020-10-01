import React, { Component } from 'react'

// COMPONENTS
import TODO_LIST from "../../components/todo_list/Todo_list";


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
    }

    render() {

        const { todoes, isLoading } = this.state;
        const Todo_list = isLoading ? "Loading" : <TODO_LIST todoes={todoes} />

        return (
            <ul>
                {Todo_list}
            </ul>
        );
    }

}

export default Home
