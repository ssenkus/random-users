# random-users

## Random User API

### Objective:


Create an API in Node.js/Express exposing 3 endpoints to GET and POST random user data!
We want to make asynchronous requests from within our API to retrieve our data initially from a 3rd party API ("https://randomuser.me/api").
Below are the details of the requirements and endpoints. Good luck!

Requirements:

• Node version > 4.x
• Express version 4
• Asynchronous request module of your choice.
• Asynchronous handling using either callacks, promises or async/await
• Client of your choice to perform requests to your API (i.e. Postman etc).

Endpoints:

GET `/users`
  When this endpoint receives a request from the client, 10 asynchronous requests are made to "https://randomuser.me/api",
  retrieving 10 different user records and stores them in memory. Every time after this endpoint recieves a request,
  10 NEW user records are stored in memory.

  Raw user data retrieved from "https://randomuser.me/api" should be stored in memory as shown below:

  {
    gender: 'foo',
    firstname: 'bar',
    city: 'baz',
    email: 'barfoo',
    cell: 'bazbar'
  }

 Response:
    List of all users in memory store with status code 200.

POST `/users`
  User data POSTed should be stored in memory and be visible by GET endpoints.

  Response:
    `{ message: 'User successfully created!' }` JSON response with status code 201.

GET `/users/firstname/:firstname`
  Filter through existing memory storage and find user by `:firstname` value.

  Response:
    If user is found:
      User record in JSON format with status code 200.

    If not found:
      `{ message: 'User not found! '}` JSON response with status code 404.

Please upload your code to a version control platform and send us the link when you are done.
Let us know if you have any questions. Thanks!
