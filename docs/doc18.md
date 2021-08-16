---
id: doc18
title: 👨‍💻 👨‍💼 Fetch all roles
---

Below is the query to get all roles :

```graphql
query FetchRoles {
  roles {
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
