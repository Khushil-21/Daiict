import React, { useState } from "react";
import SpeechRecognition, {
	useSpeechRecognition,
} from "react-speech-recognition";

export const DoctorDashboard = () => {
	const [Medi, setMedi] = useState([]);
	const [Input, setInput] = useState();
	let count = 0;
	function addmedi() {
		setMedi([...Medi, Input]);
		console.log(Medi);
	}
	function addmed() {
		setMedi([...Medi, transcript]);
		console.log(Medi);
	}
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
	} = useSpeechRecognition();

	if (!browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}
  const li =`mailto:khushil@gmail.com?subject=prescription&body=${Medi}`
	return (
		<div className="center">
			<h2> Doctors Dashboard </h2>
			<br></br>
			<div>
				<input
					type="text"
					placeholder="Medicine Name"
					required
					onChange={(e) => {
						setInput(e.target.value);
					}}
				></input>
				&nbsp;&nbsp;&nbsp;
				<button onClick={addmedi}>Add Medicine</button>
			</div>
			<br></br>

			<p>Microphone: {listening ? "on" : "off"}</p>
			<br></br>

			<div>
				<button onClick={SpeechRecognition.startListening}>Start</button>{" "}
				&nbsp;&nbsp;&nbsp;
				<button onClick={SpeechRecognition.stopListening}>Stop</button>{" "}
				&nbsp;&nbsp;&nbsp;
				<button onClick={resetTranscript}>Reset</button>
			</div>
			<br></br>
			{transcript ? (
				<p>
					{transcript} &nbsp; <button onClick={addmed}>Add Medicine</button>
				</p>
			) : null}
			<br></br>

      {
        Medi.map((v, i) => {
				count = count + 1;
				return (
					<h4>
						Medicine {count} :- {v}{" "}
						<button
							onClick={(e) => {
								setMedi([
									...Medi.slice(0, i),
									...Medi.slice(i + 1, Medi.length),
								]);
							}}
						>
							Delete
						</button>
						<br></br>
						<br></br>
					</h4>
				);
        })}
      
      <a className="a" href={li} >Click to Send an Email To Pharmacy </a>
		</div>
	);
};
