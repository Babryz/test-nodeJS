import React from 'react';

class Registration extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: 'first name',
            lastName: 'last name',
            email: 'e-mail',
            password: 'password',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    apiCall = 'http://localhost:8000/register';

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        fetch(this.apiCall, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
                    <input type="text" value={this.state.email} name="email" onChange={this.handleChange}/>
                    <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Registration;