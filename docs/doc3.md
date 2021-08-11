---
id: doc3
title: 🙋 Me Query
---

To identify current user, you can use `me` query, like this :

```graphql
query MeQuery {
  me {
    id
    username
    email
    confirmed
    blocked
    role {
      id
      name
      description
      type
    }
  }
}
```

<b>Note : `me` query requires JWT attached in headers!</b>

### 📎 How to attach JWT in headers :

`authorization : Bearer YOUR_TOKEN`
