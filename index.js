//Importing express and creating an instance of express
import express from 'express';
const app = express();

// Importing dotenv to load environment variables
import dotenv from 'dotenv';
dotenv.config({"path": "./.env"});

// Importing PORT from environment variables
const PORT = process.env.PORT || 3000;

// Use the express.json() middleware to parse JSON request bodies
app.use(express.json());

// Importing the IndentityVerification router for mounting
import IndentityVerificationRoute from './routes/indentiFicationRoute.js';

// Mounting the IndentityVerification router on the "/api/visitor" path
app.use('/api/visitor', IndentityVerificationRoute);


// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});