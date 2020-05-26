import React from 'react';
import Registration from './Registration';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: ''
      },
      isLoaded: false,
      apiCall: 'http://localhost:8000/users/5ec853944d076b4ffc75af13'
    }
  }

  

  componentDidMount() {
    fetch(this.state.apiCall)
      .then(res => res.json())
      .then(data => this.setState({
        user: data,
        isLoaded: true
      }))
  }

  render() {
    const { user, isLoaded } = this.state;

    if (!isLoaded) {
      return <h3>Loading...</h3>
    } else {
      return (
        <div>
          <div>
            <h3>User:</h3>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
          </div>
          <div>
            <Registration />
          </div>
        </div>
      )
    }
  }
}

export default App;
