---
id: doc12
title: 🔄 Update an entry in collection type
---

```graphql
mutation UpdateSingleJuventusPlayer($input: updateJuventusInput) {
  updateJuventus(input: $input) {
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
      profpic {
        name
        url
        provider
      }
      published_at
    }
  }
}
```

You may change the variable like this :
```json
{
  "input": {
    "where": {
      "id": "ID_OF_ENTRY"
    },
    "data": {
      "FIELD_1_TO_CHANGE": "NEW_VALUE_OF_FIELD_1",
      "FIELD_2_TO_CHANGE": "NEW_VALUE_OF_FIELD_2",
      "FIELD_3_TO_CHANGE": "NEW_VALUE_OF_FIELD_3"
    }
  }
}
```

In the example above, you are changing three fields. However, you can change only one field as well.  

Pretend that a player scored 3 goals in 17 appearences throughout a season. With that being said, minutes the player has played raised to 1381 minutes. You may want to do :
```json
{
  "input": {
    "where": {
      "id": "60df54f39bc9f96f94bd7db5"
    },
    "data": {
      "appearences": 17,
      "goals": 3,
      "minutesPlayed": 1381
    }
  }
}
```

The response should include the fields with the updated value :
```json
{
  "data": {
    "updateJuventus": {
      "juventus": {
        "id": "60df54f39bc9f96f94bd7db5",
        "_id": "60df54f39bc9f96f94bd7db5",
        "createdAt": "2021-02-02T18:03:31.447Z",
        "updatedAt": "2021-02-02T18:08:19.204Z",
        "name": "Radu Dragusin",
        "number": 37,
        "age": 19,
        "country": "Romania",
        "appearences": 17,
        "goals": 3,
        "minutesPlayed": 1381,
        "position": "DF",
        "profpic": {
          "name": "dragusin.png",
          "url": "https://res.cloudinary.com/djmhwsmks/image/upload/v1625250418/dragusin_c28d444a3b.jpg",
          "provider": "cloudinary"
        },
        "published_at": "2021-02-02T18:03:31.427Z"
      }
    }
  }
}
```
