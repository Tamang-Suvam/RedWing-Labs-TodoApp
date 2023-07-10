import express, { urlencoded } from "express"
import cors from "cors"
import bodyParser from 'body-parser';

import Connection from "./database/db.js"
import Routes from './routes/route.js'

const app = express()

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}))

app.use("/", Routes)

// Server is running in port 8080
const port = 8000

// Establishing the connection to the mongoDB database
Connection()

app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`)
})
