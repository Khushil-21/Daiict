
const express = require("express");
const cors = require("cors");
const createDoc = require("../Database/Users");
const app = express();
app.use(express.json());
app.use(cors());

// const Admincarendtials = [{ Username: "12", Password: "12" }];
createDoc();
app.post("/Doctors", (req, res) => {
    console.log("rtyguhijed---------\n\n\n"+req.body.result)
})

app.post("/DoctorAuthentication", (req, res) => {


	console.log("----" + req.body.Username);
	console.log(req.body.Password);
	let passworderror = "";
	let nameerror = "";

	for (var a of Admincarendtials) {
		if (req.body.Username === a.Username) {
			nameerror = "";
			if (req.body.Password === a.Password) {
				passworderror = "";
				break;
			} else {
				passworderror = "Wrong Admin Password";
			}
		} else {
			nameerror = "Wrong Admin Name";
			if (req.body.Password !== a.Password) {
				passworderror = "Wrong Admin Password";
				a = "Wrong Admin Password";
			}
		}
	}
	console.log(nameerror + " " + passworderror);
	res.json({ nameerror, passworderror });
});

app.listen(5001, () => {
	console.log("Server Started -- ");
});
