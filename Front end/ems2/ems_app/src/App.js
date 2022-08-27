import React from 'react';
import './App.css';
import NavbarComponent from './Component/NavbarComponent';
import Employee from './Pages/Employee';
import Compliance from './Pages/Compliance';
import Department from './Pages/Department';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
return (

	<Router>
		<div className="App">
      <NavbarComponent />
      
        <Routes>
          
          <Route path="/Employee" element={<Employee />} />
          <Route path="/Department" element={<Department />} />
          <Route path="/Compliance" element={<Compliance />} />

        </Routes>
     </div>
	</Router>
);
}

export default App;
