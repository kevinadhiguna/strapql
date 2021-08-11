---
id: doc13
title: ❌ Delete/Remove an entry in collection type
---

```graphql
mutation removeSingleJuventusPlayer($input: deleteJuventusInput) {
  deleteJuventus(input: $input) {
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

Variables :

```json
{
  "input": {
    "where": {
      "id": "ID_OF_ENTRY"
    }
  }
}
```

To give you an idea, let's say a player is transferred to another football club. We pass the player's id as a variable this :

```json
{
  "input": {
    "where": {
      "id": "60df54f39bc9f96f94bd7db5"
    }
  }
}
```

After removed the player successfully, Strapi will send a response like this:

```json
{
  "data": {
    "deleteJuventus": {
      "juventus": {
        "id": "60df54f39bc9f96f94bd7db5",
        "_id": "60df54f39bc9f96f94bd7db5",
        "createdAt": "2021-02-02T18:03:31.447Z",
        "updatedAt": "2021-02-02T18:26:53.923Z",
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
