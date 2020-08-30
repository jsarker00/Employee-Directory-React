import React from 'react';
import Table from 'react-bootstrap/Table';
import employees from "../employee.json";





function EmployeeTable(){
    function sortByName (){
        console.log("hello")
    }
    return(
            <div>
     
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th onClick={sortByName}>Name</th>
      <th>occupation</th>
      <th>location</th>
    </tr>
  </thead>
  <tbody>
  {employees.map(employee => (
    <tr>
      <td>{employee.id}</td>
      <td>{employee.name}</td>
      <td>{employee.occupation}</td>
      <td>{employee.location}</td>
    </tr>
    ))}
  </tbody>
</Table>
        </div>
    
        
    )
}
export default EmployeeTable;

// function App() {
//   return (
//     <div>
//       {employees.map(employee => (
//         <li>
//           {name}
//         </li>
//       ))}
//     </div>
//   );
// }