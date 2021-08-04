---
id: doc7
title: Update a User
---

## 🔄 Update a User

Imagine you want to change a user's email. To do such things, you should use a mutation which updates the user's data. Here is an example to change a user's email :
```graphql
mutation UpdateUser($input: updateUserInput) {
  updateUser(input: $input) {
    user {
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

Then pass some variables that you would like to change (in this case, `email` field) :
```json
{
  "input": {
    "where": {
      "id": "YOUR_USER_ID"
    },
    "data": {
      "email": "YOUR_USER_EMAIL"
    } 
  }
}
```

If you want to change fields other than `email`, just replace the `email` variable.
