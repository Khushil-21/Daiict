import './App.css';
import { AdminDashboard } from './Webpages/AdminDashboard';
import { DoctorDashboard } from './Webpages/DoctorDashboard';
import { LoginForm } from './Webpages/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ManageDashboard } from './Webpages/ManageDashboard';
import { Success } from './Webpages/Success';

function App() {
  return (
    <div>
      <Router>
				<Routes>
					<Route path="/" element={<LoginForm/>}></Route>
					<Route path="/DoctorDashboard" element={<DoctorDashboard/>}></Route>
					<Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
					<Route path="/ManageDashboard" element={<ManageDashboard/>}></Route>
				</Routes>
			</Router>
    </div>
  );
}

export default App;
