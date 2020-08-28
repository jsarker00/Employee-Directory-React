import React from 'react'
import './styles/App.css';
import Header from "./components/Header"
import EmployeeCard from "./components/EmployeeCard"

function App() {
  return (
    <div>
        <div style={{textAlign:"center"}}><Header/></div>
        
        
        <h4 style={{textAlign:"center"}}>Employee Directory</h4> 
        <p style={{textAlign:"center"}}>My first app!</p>
        <EmployeeCard/>
        <br/>
        <br/>
        <EmployeeCard/>
    </div>
    
  );
}

export default App;
