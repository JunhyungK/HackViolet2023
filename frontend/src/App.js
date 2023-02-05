import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css';
import {PieChart, Pie, Label} from 'recharts';

function App() {

  // csv file
  const [companyName, setName] = useState([]);
  const [menSalary, setMenSalary] = useState(null);
  const [womenSalary, setWomenSalary] = useState(null);
  const [entry, setEntry] = useState("");
  const [found, setFound] = useState("");
  const [maleFound, setMaleFound] = useState("----");
  const [femaleFound, setFemaleFound] = useState("----");


  useEffect(() => {
    axios({
      method: "GET",
      url:"http://localhost:5000/testing",
    })
    .then((response) => {
      const res = response.data
      setName(res.companyName);
      setMenSalary(res.maleSalary);
      setWomenSalary(res.femaleSalary);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })
  }, []);
  function handleSubmit(){
    for (var i = 0; i < companyName.length; i++){
      if (companyName[i].toLowerCase() === entry.toLowerCase()){
        setFound(companyName[i]);
        setMaleFound(menSalary[i]);
        setFemaleFound(womenSalary[i]);
        console.log("found");
        break;
      } else {
        setFound("Not Found");
      }
    }
  }

  const data = [
    { name: "Male", value: maleFound, fill: '#39a8b8'},
    { name: "Female", value: femaleFound, fill: '#d73b62'}
  ];

companyName.map(opt => ({ label: opt, value: opt }));
  

  
  
  return (
    <div className='App'>
      <div className='container'>
        <h1 id="home" className='datas'>Type in company name</h1> 
        <input className='input' list='data' placeholder="Search" onChange={input => setEntry(input.target.value)}></input>
        <datalist id='data'>
          {companyName.map((op) =><option> {op}</option>)}
        </datalist>
        <button className='button' onClick={handleSubmit}>Enter</button>

        <div  className='stuff'>
          <h1 className='name'>Company name: {found}</h1>
          <h1 className='men'>Men's Average Salary: {maleFound} K / Year</h1>
          <h1 className='women'>Women's Average Salary: {femaleFound} K / Year</h1>
            </div>
        <p className="abt" id='abt'>We're making it easier for women to 
        <span style={{color:'#cef612',fontWeight:"bold"}}> succeed </span> 
        in their careers by helping them <span style={{color:'#cef612', fontWeight:"bold"}}>negotiate higher salaries, find mentors, and network </span>
         with other smart, 
        successful women</p>
        <p className="ct" id='ct'>
          <text>
            Dev Team<br/>
            
            <br/>
            Junhyung Koo(Cheer leader, lead dev): <br/> danieljhkoo@gmail.com <br/> linkedin.com/in/junhyung-koo-a45aa6236<br/><br/>
            Kristi Gordon(UI/UX specialist, Lead Product Manager): <br/> kristimariegordon@gmail.com <br/> linkedin.com/in/kristigordon<br/><br/>
            Rutva Mehta(Backend, data research): <br/> rutvajmehta@gmail.com <br/> linkedin.com/in/rutvajmehta<br/><br/>
            Brian Kim(data research, backend): <br/> brianjk@vt.edu <br/> linkedin.com/in/intrabloom<br/><br/>

          </text>
        
         </p>
        
        <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet"></link>
        <div class='light x1'></div>
        <div class='light x2'></div>
        <div class='light x3'></div>
        <div class='light x4'></div>
        <div class='light x5'></div>
        <div class='light x6'></div>
        <div class='light x7'></div>
        <div class='light x8'></div>
        <div class='light x9'></div>
        <nav className='nav'>
          <a href= "#home" className='Home'>Home</a>
          <a href="#abt" className='About Us'>About Us</a>
          <a href="#ct" className='Contacts'>Contacts</a>
        </nav>
        <img className="logo" src={'logo.png'} alt="logo img"></img>
        <img className="arrows" src={'arrows.png'} alt="arrow img"></img>
        <PieChart className='chart' width={500} height={500}>
          <Pie label={({name, value}) => `${name}: ${value}`}  data={data} innerRadius={100} outerRadius={150} fill='#fff"'>
          </Pie>
        </PieChart>


      </div>
    </div>
  );
}

export default App;
