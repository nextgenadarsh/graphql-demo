var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    greeting: String
  }
`);

var root = { greeting: () => 'Welcome !' };

graphql(schema, '{ greeting }', root).then((response) => {
    console.log(response);
});