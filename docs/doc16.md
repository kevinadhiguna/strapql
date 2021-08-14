---
id: doc16
title: 📂 Get all files
---

>All right, I got images and files uploaded to my Strapi app but how do I know what files did I upload ?  

To get all the files uploaded to database within your Strapi app, here is the query :
```graphql
query FetchFiles {
  files {
    id
    createdAt
    updatedAt
    name
    alternativeText
    caption
    width
    height
    formats
    hash
    ext
    mime
    size
    url
  }
}
```

Unfortunately, currently Strapi does not provide a query to fetch a single file.
