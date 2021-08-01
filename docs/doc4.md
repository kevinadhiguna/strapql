---
id: doc4
title: Create a User
---

## 🆕 Create a User in Users (a collection type that comes default in Strapi app)

<!-- Need refactoring the table

> What? Create a User? Didn't I just create a User using `Registration` mutation ?

Sure, here is some notable points :
|                                            |                `Create User` mutation                |                                   `Registration` mutation                                   |
|:------------------------------------------:|:----------------------------------------------------:|:-------------------------------------------------------------------------------------------:|
|       Needs JWT attached in Headers?       | Yes, usually you must be `superadmin` role in Strapi |                                              No                                             |
| Is created user `authenticated` initially? |                          No                          | Yes, users that are created with `Registration` mutation is already authenticated initially |

-->

```graphql
mutation CreateUser($input: createUserInput) {
  createUser(input: $input) {
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
        id
        name
        description
        type
        permissions {
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
          username
        }
      }
    }
  }
}
```

Pass these variables :
```json
{
  "input": {
    "data": {
      "username": "YOUR_USERNAME",
      "email": "YOUR_EMAIL",
      "password": "YOUR_PASSWORD"
    }
  }
}
```
<b>Note : Please attach a JWT in Headers, usually Superadmin's JWT.</b>

### 🔑 How to get Superadmin's JWT

Go to `Documentation` in the menu on the left side -> Copy the token in `Retrieve your jwt token`.

