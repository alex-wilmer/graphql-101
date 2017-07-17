import React, { Component } from 'react'

class App extends Component {
  state = { users: [] }
  componentDidMount() {
    fetch('http://localhost:4003/graphql', {
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
              favoriteMovies {
                id
                title
              }
            }
          }
        `,
        variables: null
      })
    })
      .then(response => response.json())
      .then(json => this.setState({ users: json.data.users }))
  }
  render() {
    return (
      <div>
        <h1>Our super cool app</h1>
        {this.state.users.map(user =>
          <div key={user.id}>
            {user.name} - age: {user.age}
            movies:
            {user.favoriteMovies.map(movie =>
              <div key={movie.id}>
                title: {movie.title}
              </div>
            )}
            <hr />
          </div>
        )}
      </div>
    )
  }
}

export default App
