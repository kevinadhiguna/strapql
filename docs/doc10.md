---
id: doc10
title: 📮 Fetch/Retrieve a single entry in collection type
---

To fetch an entry in your collection type, this query is probably able help you :
```graphql
query FetchSingleJuventusPlayer($id: ID!) {
  juventus(id: $id) {
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

Pass the ID of the record/entry you want to fetch :
```json
{
  "id": "ID_OF_ENTRY"
}
```

To illustrate :
```json
{
  "id": "60df54f39bc9f96f94bd7db5"
}
```

The response would be like :
```json
{
  "data": {
    "juventus": {
      "id": "60df54f39bc9f96f94bd7db5",
      "_id": "60df54f39bc9f96f94bd7db5",
      "createdAt": "2021-02-02T18:03:31.447Z",
      "updatedAt": "2021-02-02T18:26:53.923Z",
      "name": "Radu Dragusin",
      "number": 37,
      "age": 19,
      "country": "Romania",
      "appearences": 14,
      "goals": 1,
      "minutesPlayed": 1111,
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
```

📝 Note: To be able to see `profpic` in response, you should [upload a picture](#-%EF%B8%8F-upload-a-single-image) to the field. Otherwise it is null. Here, Cloudinary is the upload provider but you can use other options such as AWS S3 too.
