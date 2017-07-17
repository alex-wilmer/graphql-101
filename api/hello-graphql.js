var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
  type Person {
    name: String
    age: Int
  }

  type Query {
    person: Person
    hello: String
    three: Int
  }
`)

var query = `
  {
    person {
      age  name

    }
  }
`

var resolutionMap = {
  hello: () => 'Hello world!',
  three: () => 1 + 2,
  person: {
    name: () => 'Alex',
    age: () => 31
  }
}

graphql(schema, query, resolutionMap).then(response => {
  console.log(response)
})
