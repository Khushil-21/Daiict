const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/hospital")
	.then(() => {
		console.log("success");
	})
	.catch((err) => {
		console.log(err);
	});

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
});
const doctor = new mg.model("doctor", doctors);
const createDoc = async () => {
	try {
		const result = doctor.find({});
		console.log(result);
		// const res = await fetch("http://localhost:5001/Doctors", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({result}),
		// });
	} catch {
		console.error("ERROR");
	}
};

module.exports = createDoc;
