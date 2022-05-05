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
     import userRoutes from "./routes/userRoutes.js";
```

   2. Register the routes for usage by the app:

``` javascript
      app.use('/user',userRoutes);
```

## Task 4 - Configure passport

1. Create a new file `passport-config.js` in the root folder of our project. 

2. Inside the file make the necessary imports:
``` javascript
import User from "./models/User";
import passportJWT from "passport-jwt";
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
```

3. Create a new `initialize` function which takes passport as a parameter: 
``` javascript
function initialize(passport) {

}
```

4. Export this function so it can be used in `server.js`

``` javascript
export default initialize;
```
 5. Inside the initialize function define a new `passport.use` function to configure the new JWT Strategy: 
 ``` javascript
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET
      },
       function (jwtPayload, done) {
         return User.findById(jwtPayload.sub)
         .then(user => 
         {
           return done(null, user);
         }
       ).catch(err => 
       {
         return done(err);
       });
      }
      ))
}

```

## Task 5 - Import passport config inside the server file.

1. Import passport inside `server.js and run the initalize function.  
``` javascript
import initializePassport from "./passport-config";
initializePassport(passport);
```
## Task 6 - Testing 

1. Test out the application using Postman, Insomnia or any other API dev tool. 


  

# Bonus (Optional):
- You can secure a new route using `passport.authenticate`: 
``` javascript
router.get('/list', passport.authenticate('jwt', { session: false }), controller.list)
```




