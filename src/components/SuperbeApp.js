import React, { Component } from 'react'
import Dashboard from './Dashboard'
import User from './User'

const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Alan" },
    { id: 3, name: "Phil" },
    { id: 4, name: "Naoudi" },
    { id: 5, name: "Fenley" }
];
export default class SuperbeApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            users: users,
            error: false
        }
    }
    handleChange = (e) => {
        this.setState({
            error: false,
            user: e.target.value
        })
    }

    handleClick = (e) => {
        const search = this.state.users.filter( user => user.name.toUpperCase() === this.state.user.toUpperCase())
        if (search.length > 0) {
            this.setState({
                error: true
            })
        }
        this.state.users.push({
            id: this.state.users.length + 1,
            name: this.state.user
        })
        this.setState({
            error: false,
            users: this.state.users
        })
    }
    handleShuffle = (e) => {
        this.setState({
            users: this.state.users.sort(() => Math.random( ) - 0.5)
        })
    }
    render() {
        return (
            <div>
                <Dashboard>
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleShuffle}>Shuffle</button>
                    <button onClick={this.handleClick}> Add User
                        {
                            this.state.error && <p>Attention l'utilisateur {this.state.user} existe déjà </p>
                        }
                    </button>
                    <ul>
                        {
                            this.state.users.map((user, i) => {
                                return(<User key={i} 
                                        {...user}
                                />)
                            })
                        }
                    </ul>
                </Dashboard>
            </div>
        )
    }
}
