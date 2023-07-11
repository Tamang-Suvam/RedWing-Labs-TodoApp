
# A Todo Application using MERN stack.

A simple todo list application that used MERN stack to achieve the CRUD operations.



## Tools Required

Javascript, NodeJS, ExpressJS, MongoDB, ReactJS, VSCode(or some similar IDE).

MongoDB server can be accessed from here: https://cloud.mongodb.com/

Sign in and create a free account and a free shared cluster. Save the connection URL or the username and password that you create here. It will be useful for connecting from the frontend. We also need to add our local IP Address into the cluster so that we can access the cluster from our local machine. Most of the steps are self-explanatory.
## Installation

Clone this repository to use or build on top of my application

```bash
  https://github.com/Tamang-Suvam/RedWing-Labs-TodoApp.git
```
Go inside the client folder and run

```bash
cd client
npm install
```

Similarly, go inside the server folder and run

```bash
cd server
npm install
```
## Running the Application

```
Veri Important*: You need to create a .env file inside the server folder and put your mongoDB username and password from the link provided above to connect to the mongoDB cloud based database.
```

To run the application, so inside the server folder and run:

```bash
npx nodemon index
```
This gets the server running.

Now the client can be made to get connected to the server. So, now run the client application which is the React based program. Inside the client folder run:

```bash
npm start
```
This should open a tab in the default browser of yours on the port 3000 and you should be able to now access the application.
## Deployment

You can host the backend server on render at https://render.com/

The frontend can be hosted on services like netlify at https://www.netlify.com/

Netlify gives one more extra and easiest option to host your application. Go inside client folder and run:

```bash
npm run build
```
This creates a folder named `build` inside the client directory. Now we can just drag and drop the file in the Netlify UI and lo and behold the application gets deployed.

## Access My Application At

My application has been hosted and is available in the URL: https://redwinglabstodoapp.netlify.app/

## Authors

- Suvam Tamang
- [Github](https://github.com/Tamang-Suvam)
- [LinkedIn](https://www.linkedin.com/in/suvam-tamang-726628190/)

