import React, { Component } from 'react'

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query {
            users {
              id
              name
              age
            }
          }
        `
      })
    })
      .then(response => response.json())
      .then(json => this.setState({ users: json.data.users }))
  }
  render() {
    return (
      <div>
        {this.state.users.map(user =>
          <div key={user.id}>
            {user.name} - age: {user.age}
          </div>
        )}
      </div>
    )
  }
}

export default App
