//Step 1: Database connection
const mongoose = require("mongoose");

//mongodb://127.0.0.1:27017/dbname
const conn_str = "mongodb://localhost:27017/UJA";


/* const conn_str = "mongodb://<username>:<password>@cluster0-shard-00-00.dslyw.mongodb.net:27017,cluster0-shard-00-01.dslyw.mongodb.net:27017,cluster0-shard-00-02.dslyw.mongodb.net:27017/<database>?ssl=true&replicaSet=atlas-3xk2hf-shard-0&authSource=admin&retryWrites=true&w=majority"; */


mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (Java Class)
const roomSchema = new mongoose.Schema({
	Roomtype: String,
	RoomNumber: Number,
	Status: String
	
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("room", roomSchema);

exports.User = userObject;