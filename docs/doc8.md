---
id: doc8
title: ❌ Delete/Remove a User
---

>A user decided to no longer use my app. How do I remove him/her?

Here is a mutation that might do the task :
```graphql
mutation deleteUser($input: deleteUserInput) {
  deleteUser(input: $input) {
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

Place the user ID of the user you want to remove as a variable :
```json
{
  "input": {
    "where": {
      "id": "YOUR_USER_ID"
    }
  }
}
```

<b>Note : Please carefully control which roles are able to conduct `delete` operation as it is sensitive.</b>
