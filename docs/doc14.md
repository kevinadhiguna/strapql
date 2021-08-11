---
id: doc14
title: 📤 🖼️ Upload a single image
---

### ⚠️ Warning : Currently Strapi's GraphQL Playground does not support file/image upload. You can use other GraphQL client to test your GraphQL upload mutation.
One of the GraphQL clients alternaive is Altair. You can download it here : https://altair.sirmuel.design/#download

Please create a new entry in your collection type API first ! Otherwise this will not be attached to your entry.
Note : the `refId` is the ID of the entry you create in your collection type API.
```graphql
mutation SingleImageUpload($refId: ID, $ref: String, $field: String, $file: Upload!) {
  upload(refId: $refId, ref: $ref, field: $field, file: $file) {
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

Variables :
```json
{
  "refId": "ID_OF_YOUR_ENTRY_IN_YOUR_COLLECTION_TYPE",
  "ref": "YOUR_COLLECTION_TYPE_NAME",
  "field": "FIELD_NAME"
}
```

Here is an example :<br/>
<img src="https://raw.githubusercontent.com/kevinadhiguna/strapi-graphql-documentation/master/assets/gif/singleImageUpload.gif" />
