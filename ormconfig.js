module.exports = {
  "type": "mongodb",
  "url": "mongodb+srv://Izabela:1dCZCz4J8OIppvFk@fluke.ju6xj.mongodb.net/Fluke?retryWrites=true&w=majority",
  "useNewUrlParser": true,
  "synchronize": true,
  "useUnifiedTopology": true,
  "logging": true,
  "entities": [
    "./src/modules/users/infra/typeorm/entities/*.ts",
    "./src/modules/tickets/infra/typeorm/entities/*.ts",
    "./src/modules/products/infra/typeorm/entities/*.ts"
  ]
}