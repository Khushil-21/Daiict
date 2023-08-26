import './App.css';
import { DoctorDashboard } from './Webpages/DoctorDashboard';
import { LoginForm } from './Webpages/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
				<Routes>
					<Route path="/" element={<LoginForm/>}></Route>
					<Route path="/DoctorDashboard" element={<DoctorDashboard/>}></Route>
				</Routes>
			</Router>
    </div>
  );
}

export default App;
