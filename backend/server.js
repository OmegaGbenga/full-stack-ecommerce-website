const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

dotenv.config()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static(__dirname + '/uploads'));
const dbUri = process.env.MONGODBURI;


const connectDB = async () => {
    await mongoose.connect(dbUri);
    app.listen(PORT, () => {
        console.log('Database connected successfully');
        console.log('Server is listening on port: ' + PORT);
    })
}

connectDB()


app.use('/user', userRoutes);
app.use('/blogs', blogRoutes)