# graphql-101

What:

graphql is a "communication language", specified by Facebook to make client <-> server interaction more expressive and reliable vs the existing standard: REST.

Why:

The "communication language" of REST is simple by design--it consists of URLs and HTTP methods. Modern applications are more complex than their predecessors and benefit from a more feature rich "communication language". graphql adds field types, relationships, errors, deprecation warnings, schema introspection and more!

How:

Similar to REST, graphql is only a "spec" which explains the semantics of the language and a description of how a runtime environment should work. It is not an actual module, library or framework. However, there are implementations of the graphql spec in every major language.

The three main components of a working graphql implementation are:

1) A schema:

```js
type Query {
  hello: String
}
```

2) A query:

```js
query { hello }
```

3) A resolution map:

```js
{ hello: () => 'Hello world!' }
```


The **query** is validated against the **schema**, then if valid, traverses the **resolution map** to build the response.

```js
graphql(schema, query, resolutionMap).then(result => console.log(result))

> { data: { hello: 'Hello world!' } }
```
