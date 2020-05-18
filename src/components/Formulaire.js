import React, { Component } from 'react'

export default class Formulaire extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            auth: false,
            isSubmit: false
        }
    }
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })  
        
          
        
    }
    handleSubmit(event) {
        event.preventDefault()
        const {email, password} = this.state
        if (email === 'test@test.fr' && password === 'test') {
            this.setState({auth: true, isSubmit: true})
        }else {
            this.setState({auth: false, password: "", isSubmit: true})
        }
    }
    render() {
        const valid = this.state.email && this.state.password
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                {this.state.isSubmit && this.state.auth === false ? <p>Erreur de connexion</p> : null}
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={this.state.email} name="email" onChange={this.handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password" />
                    </div>
                            <button type="submit" disabled={!valid} className="btn btn-primary">Submit</button>
                </form>

            </div>
        )
    }
}
