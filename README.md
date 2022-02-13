# Challenge 18 - NoSQL Challenge: Social Network API

 ## Table of Contents:  

- [Objective](#objective)  
- [Project Criteria](#project-criteria)  
- [Walkthrough Videos](#walkthrough-videos)  
- [Instructions](#instructions)  
- [Tests](#tests)  

## Objective
This application creates an API for a social network to allow users to share their thoughts, reactions and create a friend list.  It uses Express.js for routing, a MongoDB database, Mongoose ODM, and the moment package to format time stamps.

## Project Criteria

- When a command invokes the application, a server is started and the Mongoose models are synced to the MongoDB database.  
- The API GET user and thought routes are tested in Insomnia and return the data for each of these routes in a formatted JSON.
- The API POST, PUT, and DELETE routes are tested in Insomnia and are able to successfully create, update, and delete users and thoughts
- The API POST and DELETE routes are tested in Insomnia and are able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Walkthrough Videos
[User Routes]() 
[Thought Routes]()  
[Friend Routes]()   
[Reaction Routes]()  

## Instructions
Follow the following instructions to replicate this repo.
1. Clone the repository.

2. Install the necessary packages with the following command:
```
    - npm install
```
3. Start the server.
```
    $ npm start
```
4. Use Insomnia to test the routes.

## Tests

Testing with Insomnia Core  

---