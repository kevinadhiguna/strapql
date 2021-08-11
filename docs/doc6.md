---
id: doc6
title: 👥 Retrieve/Fetch all Users
---

If you want to get all users in your Strapi app, this is the query you are looking for :

```graphql
query FetchUsers {
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
```

You do not have to pass any variables but you may need to attach JWT in your headers (depends on your Strapi app's roles & permissions).
