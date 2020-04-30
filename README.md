# Simple-Address-Book


### installation

[Address Book repository](https://github.com/erneryn/Simple-Address-Book) - Clone Repository here

```sh
$ cd ../server & cd ../client
```
make sure you have mongodb installed

run script from packages by using the comment bellow on server and client
```sh
 // on server
 $ npm i
 $ nodemon app.js

 // on client
 $ npm i
 $ npm run serve
```
note : default PORT is 3000


### list of Routes :
| Route | HTTP | Description |
| ------ | ------ | ----------- |
| /contact | GET  | Get all data |
| /contact | POST  | Post new Contact|
| /contact/:id | PUT  | Update a selected Contact|
| /contact/:id | GET  | Get one selected Contact|
| /contact/:id | Delete  | Delete one selected Contact|


### list of errors  :
| Code | Name | Description |
| ------ | ------ | ----------- |
| 400 | Bad Request  | Incorrect user access of form validation |
| 404 | Not Found | Request Resource not Found |
| 500 | Internal Server Error | Server currently unable to handle this request |




### GET CONTACT 
- url: /product
- Method: GET
- Request Headers:


- Success Response
```
status 200
[
    {
        "id": 9,
        "name": "Shimano 105 Pedal",
        "price": 1999988,
        "stock": 10,
        "imageurl": "https://www.rodalink.com/pub/media/catalog/product/cache/image/880x704/e9c3970ab036de70892d86c6d221abfe/7/2/721685001.jpg",
        "createdAt": "2020-02-20T03:18:49.789Z",
        "updatedAt": "2020-02-20T18:18:27.136Z"
    },
]
```
- error Response

```
status: 403

{
    "message": "Unathentication"
}
```

### POST Contact
- url: /Cotact
- Method: POST

- Request Body:

```
{
    "name": "example",
    "phoneNumber": 878765252561,
    "address": "jalan abc",
    "email": "example@gmail.com",
    "avatar": "https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
}
```

- Success Response
```
status 201

   {
    "_id": "5eaae07d663b8d0cd68bab01",
    "name": "example",
    "phoneNumber": 878765252561,
    "address": "jalan abc",
    "email": "example@gmail.com",
    "avatar": "https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png",
    "__v": 0
   }

```
- error Response

```
status: 400
{
    "validation Error": [
        " name cannot be empty !"
    ]
}
```
```
status: 500
{
    "message": internal server error !
}
```

### GET Contact by id
- url: /contact/:id
- Method: GET
- URL Params:

```
../contact/5ea7d988a9fc4c2f895c6600
```

- Success Response
```
status 200

{
    "_id": "5ea7d988a9fc4c2f895c6600",
    "name": "example",
    "phoneNumber": 8787652529,
    "address": "jalan abc",
    "email": "erneryn@gmail.com",
    "avatar": "https://i.ibb.co/1qXD6Lj/s.jpg",
    "__v": 0
}
```
- error Response

```
status: 404
{
    "message": "Data not found!",
}
```
```
status: 500
{
    "message": internal server error !
}
```


### PUT Contact by id
- url: /contact/:id
- Method: PUT
- URL Params:

```
../contact/5ea7d988a9fc4c2f895c6600
```

- Request Body:

```
{
    "name": "example",
    "phoneNumber": 878765252561,
    "address": "jalan abc",
    "email": "example@gmail.com",
    "avatar": "https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
}
```

- Success Response
```
status 200

 {
    "name": "example",
    "phoneNumber": 878765252561,
    "address": "jalan abc",
    "email": "example@gmail.com",
    "avatar": "https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
}

```

- error Response

```
status: 400
{
    "validation Error": [
        " name cannot be empty !"
    ]
}
```
```
status: 500
{
    "message": internal server error !
}
```


### DELETE Contact by id
- url: /Contact/:d
- Method: PUT
- URL Params: 
```
../contact/5ea7d988a9fc4c2f895c6600
```


- Success Response
```
status 200

 {
    "name": "example",
    "phoneNumber": 878765252561,
    "address": "jalan abc",
    "email": "example@gmail.com",
    "avatar": "https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png"
}

- error Response

```

```
status: 404
{
    "message": "Data not found!",
}
```
