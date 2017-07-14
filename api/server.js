var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')
var cors = require('cors')

var data = require('./data')

var schema = buildSchema(`
  type User {
    id: ID
    name: String
    age: Int
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID
    title: String
  }

  type Query {
    users(id: ID): [User]
    movies: [Movie]
  }
`)

var resolutionMap = {
  users: args => {
    var users = args.id
      ? data.users.filter(user => user.id === args.id)
      : data.users

    users.forEach(user => {
      var favoriteMovies = data.favoriteMovies.filter(
        fm => fm.user_id === user.id
      )
      user.favoriteMovies = data.movies.filter(movie =>
        favoriteMovies.find(fm => fm.movie_id === movie.id)
      )
    })

    return users
  },
  movies: () => data.movies
}

var app = express()
app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolutionMap,
    graphiql: true
  })
)

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
