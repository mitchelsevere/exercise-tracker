const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
// express server
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors());
app.use(express.json());
// mongodb and mongoose connections
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection establised successfully');
});
// routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
// starts server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})