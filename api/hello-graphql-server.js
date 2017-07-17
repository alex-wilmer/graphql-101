var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
  type Person {
    id: ID
    name: String!
    age: Int
  }

  type Query {
    person(name: String): Person
    hello: String
    three: Int
  }
`)

var resolutionMap = {
  hello: () => 'Hello world!',
  three: () => 1 + 2,
  person: args => {
    return {
      name: () => {
        return 'alex ' + args.name
      },
      age: () => 31
    }
  }
}

var app = express()

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolutionMap,
    graphiql: true
  })
)

app.listen(4001, () => console.log('Now browse to localhost:4000/graphql'))
