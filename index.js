const express = require("express");
const port = 8080;

const room_model = require("./user_module");
const User = room_model.User;


const app = express();
app.use(express.json());

var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Friends..");
});

app.get("/room", async (req, res) => {
	let data = await User.find().sort({_id:-1});
	res.send(data);
});

app.get("/room/:id", async (req, res) => {
	console.log(req.params.id);
	let data = await User.find({"_id": req.params.id});
	res.send(data[0]);
});

app.post("/room", async (req, res) => {
	console.log(req.body)
	let u = await User(req.body);
	let result = u.save();
	res.send(req.body);
});

app.put("/room", async (req, res) => {
	console.log(req.body);
	
	//User.updateOne({where}, {set});
	let u_data = await User.updateOne({"_id": req.body._id}, {
		"$set": {
			"RoomType" : req.body.RoomType,
			"RoomNumber" : req.body.RoomNumber,
			"Status" : req.body.Status,
		}
	});
	
	res.send(u_data);
});

app.delete("/room", async(req, res) => {
	
	let d_data = await User.deleteOne({"_id": req.body._id});
	res.send(d_data);
});

app.listen(process.env.PORT || port, () => {	
	console.log(`Listening on port ${port}`);
});