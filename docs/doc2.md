---
id: doc2
title: Register
---

Just like any other applications that requires you to create an account, you have to sign up first to create a user in `users` collection type that comes default in Strapi. Here is how to register an account :
```graphql
mutation Register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      username
      email
    }
  }
}
```

Next, put your `username`, `email`, and `password` as variables :
```json
{
  "input": {
    "username": "YOUR_USERNAME",
    "email": "YOUR_EMAIL",
    "password": "YOUR_PASSWORD"
  }
}
```

Finally, a JWT shows in response.
