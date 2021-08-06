---
id: doc9
title: Create an Entry in a Collection Type
---

## 🆕 Create an Entry in a Collection Type

For example, Juventus FC buys a new player. Here is how you can add a new record inside it :
```graphql
mutation AddSingleJuventusPlayer($input: createJuventusInput) {
  createJuventus(input: $input) {
    juventus {
      id
      _id
      createdAt
      updatedAt
      name
      number
      age
      country
      appearences
      goals
      minutesPlayed
      position
      published_at
    }
  }
}
```

Here are variables you should pass :
```json
{
  "input": {
    "data": {
      "name": "",
      "number": ,
      "age": ,
      "country": "",
      "appearences": ,
      "goals": ,
      "minutesPlayed": ,
      "position": ""
    }
  }
}
```

For instance :
```json
{
  "input": {
    "data": {
      "name": "Radu Dragusin",
      "number": 37,
      "age": 19,
      "country": "Romania",
      "appearences": 14,
      "goals": 1,
      "minutesPlayed": 1111,
      "position": "DF"
    }
  }
}
```

You will see a response like this if successful:
```json
{
  "data": {
    "createJuventus": {
      "juventus": {
        "id": "60df54f39bc9f96f94bd7db5",
        "_id": "60df54f39bc9f96f94bd7db5",
        "createdAt": "2021-02-02T18:03:31.447Z",
        "updatedAt": "2021-02-02T18:03:31.447Z",
        "name": "Radu Dragusin",
        "number": 37,
        "age": 19,
        "country": "Romania",
        "appearences": 14,
        "goals": 1,
        "minutesPlayed": 1111,
        "position": "DF",
        "published_at": "2021-02-02T18:03:31.427Z"
      }
    }
  }
}
```
