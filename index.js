import express from "express";
import cors from "cors";
import routes from "./routes.js";

const server = express();      // API server creation
const port = 3001; // Port used to access the API

server.use(express.json());    // Will use .json to interpret the API responses
server.use(cors());              // Cors instance, this need to be used to the front connection to the backend
server.use(routes);            // Add the routes imported in routes to the server instance

server.listen(port, function(){         //listen: recebe a porta
    console.log(`API server running in the port ${port}`);
})