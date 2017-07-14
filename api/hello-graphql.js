var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

var query = '{ hello }'

var resolutionMap = { hello: () => 'Hello world!' }

graphql(schema, query, resolutionMap).then(response => {
  console.log(response)
})
