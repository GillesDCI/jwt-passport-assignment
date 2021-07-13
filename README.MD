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
   1. Open `server.js` and import the userRoutes file already predefined in this project

    ```javascript
   const userRoutes = require('./routes/userRoutes');
    ```

   2. Register the routes for usage by the app: 
    ```javascript
      app.use('/user',userRoutes);
      ```


## Task 4 - Configure passport:
 1. Create middleware which checks whether the token is valid.
 
 ```javascript
function authenticateToken(req, res, next){
   const authHeader = req.headers['authorization']
   const token = authHeader && authHeader.split(' ')[1]

   if(token == null){
       return res.sendStatus(401);
   }

   jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,user) => {
    if(err) return res.sendStatus(403)

    req.user = user;
    next();
   });

}
   ```

   ## Task 5 - Creating product routes
   1. Create a new route `/products`. 
   2. Create a routerfile `productRoutes.js` and a controllerfile `/productController.js` accordingly. (optional)
   3. Inside this route you can return a json object with a list of products. You can use an array to show these products. 


 ```javascript
const Products = [
    {
        name:'Bicycle',
        description:'This is a bicycle',
        price:199,
        userID:'1'
    },
    {
        name:'Cup',
        description:'This is a cup',
        price:2,
        userID:'1'
    },
    {
        name:'Phone',
        description:'This is a phone',
        price:499,
        userID:'1'
    }
]
 ```
 4. protect the route using the middleware, you can only access the route using the token. 

 Example :

 ```javascript
app.get('/teas',authenticateToken, controller.list)
  ```


## Task 6 - Test everything
Use a client like postman or insomnia to test your API. 

  

# Bonus (Optional):
- You can use database models instead of array values.
- Authenticate the user instead of automatically creating an object. 





