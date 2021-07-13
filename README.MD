# JWT Implementing Passport. 

In this assignment you will set up your own JWT Strategy using passport. 

## What you will be doing

This project will allow you to practise using:

> - JWT 
> - Passport


This project assumes you've already had experience with:

> - Routing 
> - Express
> - MVC 


## Tasks

## Task 1 - Install dependencies 
  1. Use `npm install` to install all the dependencies we need. 

## Task 2 - Configure the .env file

  1. Create a new `.env` file and configure it according to the example `env.example`

## Task 3 - Set up the routes inside the server file
   1. Open `server.js` and import the userRoutes file already predefined in this project.
``` javascript
     const userRoutes = require('./routes/userRoutes');
```

   2. Register the routes for usage by the app:

``` javascript
      app.use('/user',userRoutes);
```

## Task 4 - Configure passport

1. Create a new file `passport-config.js` in the root folder of our project. 

2. Inside the file make the necessary imports:
``` javascript
const User = require('./models/User');
const bcrypt = require('bcrypt');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
```

3. Create a new initialize function which takes passport as a parameter: 




 

  

# Bonus (Optional):
- You can use database models instead of array values.
- Authenticate the user instead of automatically creating an object. 





