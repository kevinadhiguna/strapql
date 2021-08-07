---
id: doc5
title: 🧑 Retrieve/Fetch a single User
---

Previously, we created a new user. To retrieve a specific user inside User collection type, you can make use of this query :
```graphql
query FetchSingleUser($id: ID!) {
  user(id: $id) {
    id
    createdAt
    updatedAt
    username
    email
    provider
    confirmed
    blocked
    role {
      name
    }
  }
}
```

Variables :
```json
{
  "id": "YOUR_USER_ID"
}
```
