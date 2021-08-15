---
id: doc17
title: 👨‍💻 Fetch a single role
---

Here is the query to display a single role :
```graphql
query fetchSingleRole($id: ID!) {
  role(id: $id) {
    id
    name
    description
    type
    permissions {
      id
      type
      controller
      action
      enabled
      policy
      role {
        name
      }
    }
    users {
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
}
```

Variable :
```json
{
  "id": "ROLE_ID"
}
```
