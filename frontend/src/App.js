import logo from './logo.svg';
import { useState } from 'react'
import axios from "axios";
import './App.css';

function App() {
  const [companyName, menSalary, womenSalary] = useState(null)

  
  function getData() {
    axios({
      method: "GET",
      url:"http://localhost:5000/testing",
    })
    .then((response) => {
      const res =response.data
      setCompanyName({
        company_name: res.name,
        men_salary: res.men,
        women_salary: res.women})
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
  return (
    <div className="App">
        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {companyName && <div>
              <p>Company name: {companyName.company_name}</p>
              <p>Men's Average Salary: {companyName.men_salary}</p>
              <p>Women's Average Salary: {companyName.women_salary}</p>
            </div>
        }
         {/* end of new line */}
    </div>
  );
}

export default App;
