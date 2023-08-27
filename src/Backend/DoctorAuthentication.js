const express = require("express");
const cors = require("cors");
const app = express();
const mg = require("mongoose");
app.use(express.json());
app.use(cors());

var result = [];
var Admincarendtials = [];
// const rew = createDoc();

// const Admincarendtials = [{ Username: "12", Password: "12" }];

app.post("/DoctorAuthentication", (req, res) => {
	const doctors = new mg.Schema({
		name: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
		},
		mobile_number: Number,
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
		},
	});
	const doctor = mg.models.doctor || mg.model("doctor", doctors);
	const createDoc = async () => {
		try {
			result = await doctor.find({}, { __v: 0, _id: 0, email: 0 });
			// console.log("DOC Runned\n" + JSON.stringify({result}));
			// console.log("DOC Runned\n" + result);
			Admincarendtials = result;
			// console.log(Admincarendtials);
			let passworderror = "";
			let nameerror = "";
			var role = "";
			for (var a of Admincarendtials) {
				if (req.body.Username === a.name) {
					nameerror = "";
					if (req.body.Password === a.password) {
						passworderror = "";
						role = a.role;
						break;
					} else {
						passworderror = "W";
					}
				} else {
					nameerror = "W";
					if (req.body.Password !== a.password) {
						passworderror = "W";
					}
				}
			}
			console.log(nameerror + " " + passworderror + " " + role);
			res.json({ nameerror, passworderror, role });
		} catch {
			console.error("ERROR");
		}
	};
	createDoc();
});

app.post("/AddPaitent", (req, res) => {
	console.log(req.body.Fname);
	const Paitents = new mg.Schema({
		Fname: {
			type: String,
		},
		Lname: {
			type: String,
		},
		Age: String,	
		Symptoms:String,
		Abha:String,
	});
	const Paitent = mg.models.Paitent || mg.model("Paitent", Paitents);

	const AddPaitent = async () => {
		try {
			console.log(req.body.Lname)
			result = await Paitent.insertMany([{Fname:req.body.Fname,Lname:req.body.Lname,Age:req.body.Age,Symptoms:req.body.Symptoms,Abha:req.body.Abha}]);
			// console.log("DOC Runned\n" + JSON.stringify({result}));
			console.log("p11111111111\n" + result);
			
			// res.json({ nameerror, passworderror, role });
		} catch(exception){
			console.error("ERROR");
			console.error(exception);
		}
	};
	AddPaitent();
	res.json({Status:"Added"});
	
});

app.listen(5001, () => {
	console.log("Server Started -- ");
	mg.connect("mongodb://127.0.0.1:27017/hospital")
		.then(() => {
			console.log("success");
		})
		.catch((err) => {
			console.log(err);
		});
});
