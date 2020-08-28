import React from 'react'
import './styles/App.css';
import Header from "./components/Header"

function App() {
  return (
    <div>
        <Header/>
      <h1 style={{textAlign:"center"}}>Employee Directory</h1> 
      <p style={{textAlign:"center"}}>My first app!</p>
    </div>
    
  );
}

export default App;
