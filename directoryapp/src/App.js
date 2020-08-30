import React from 'react'
import './styles/App.css';
import Header from "./components/Header"
import employees from "./employee.json";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  return (
    <div>
        <div style={{textAlign:"center"}}><Header/></div>
        
        
        <h4 style={{textAlign:"center"}}>Employee Directory</h4> 
        <EmployeeTable/>
        
    </div>
    
  );
}

export default App;
