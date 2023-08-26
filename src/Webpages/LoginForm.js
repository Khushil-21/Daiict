import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

export const LoginForm = () => {
	const [Data, setData] = useState({})
    const navigate = useNavigate()
	
	const submit = async (e) => {
		e.preventDefault()
		console.log(Data)
		const { Username, Password } = Data
        const res = await fetch("http://localhost:5001/DoctorAuthentication", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Username,Password})
		})
        const json = await res.json()
		console.log(json.nameerror)
        console.log(json.passworderror)
        if (json.nameerror === "" && json.passworderror === "") {
            
            navigate("/DoctorDashboard")
        }

	}

	return (
		<>
			<h1>
				<section>
					<div class="box">
						<div class="square" style={{"--i":0}}></div>
						<div class="square" style={{"--i":1}}></div>
						<div class="square" style={{"--i":2}}></div>
						<div class="square" style={{"--i":3}}></div>
						<div class="square" style={{"--i":4}}></div>
						<div class="square" style={{"--i":5}}></div>

						<div class="container">
							<div class="form">
								<h2>LOGIN</h2>
								<form action="" onSubmit={submit}>
									<div class="inputBx">
											
										<input type="text" required="required" className="up" onChange={(e) => {setData({...Data,"Username":e.target.value})}}	/>
										<span>Username</span>
										
									</div>
									<div class="inputBx password">
										<input
											id="password-input"
											type="password"
											name="password"
											required="required"
											onChange={(e) => { setData({ ...Data, "Password": e.target.value })}}
										/>
										<span>Password</span>
										
									</div>
									<input className="rem" type="checkbox"/>
									<label class="remember">
										Remember
									</label>
									<div class="inputBx">
										<input type="submit" value="Log in"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</h1>
		</>
	);
};
