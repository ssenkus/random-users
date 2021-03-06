# Random User API

## Objective:


Create an API in Node.js/Express exposing 3 endpoints to GET and POST random user data!
We want to make asynchronous requests from within our API to retrieve our data initially from a 3rd party API ("https://randomuser.me/api").

## Getting Started

* Clone this repository
* Install dependencies: `npm install`
* Start project: `npm start`

## Endpoints:

### `GET /users`

When this endpoint receives a request from the client, 10 asynchronous requests are made to "https://randomuser.me/api",
retrieving 10 different user records and stores them in memory. Every time after this endpoint recieves a request,
10 NEW user records are stored in memory.

Raw user data retrieved from "https://randomuser.me/api" are stored in memory as shown below:
````
  {
    gender: 'foo',
    firstname: 'bar',
    city: 'baz',
    email: 'barfoo',
    cell: 'bazbar'
  }
````

 Response:
    List of all users in memory store with status code 200.

### `POST /users`
  User data POSTed should be stored in memory and be visible by GET endpoints.

  Response:
```
{ message: 'User successfully created!' }
```


JSON response with status code 201.

### GET `/users/firstname/:firstname`
Filter through existing memory storage and find user by `:firstname` value.

Response:
* If user is found:
      User record in JSON format with status code 200.

* If not found: JSON response with status code 404.
```
{ message: 'User not found! '}
```
      
### Testing

Postman scripts are including in this project under `Postman-API`.  Download Postman and import this file.  Start the random-users server `npm start`, and run these scripts to test API

### TODO

* Add unit tests
* Add integration tests
* Add DB persistence 
* Create React-based Dashboard to query/create users
* And much, much more...

