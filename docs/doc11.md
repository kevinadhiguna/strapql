---
id: doc11
title: 📒 Fetch/Retrieve all entries in collection type
---

This may get you all the entries in your collection type :

```graphql
query FetchAllJuventusPlayers {
  juventuses {
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
```

You do not pass any variables.
