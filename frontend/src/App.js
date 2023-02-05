import logo from './logo.svg';
import { useState } from 'react'
import axios from "axios";
import './App.css';

function App() {

  // csv file
  const [companyName, menSalary, womenSalary] = useState(null)

  // Logo?
  const ClickableImage = ({ src, alt, to }) => {
    return (
      <Link to={to}>
        <img src={src} alt={'SheEarns Logo'} style={styles.image} />
      </Link>
    );
  };

  // navbar
  const Navbar = () => {
    return (
      <nav style={styles.navbar}>
        <Link to="/" style={styles.navbarLink}>
          Home
        </Link>
        <Link to="/learn" style={styles.navbarLink}>
          Learn
        </Link>
        <Link to="/contact" style={styles.navbarLink}>
          Contact
        </Link>
      </nav>
    );
  };

  // navbar styles
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 60,
      padding: '0 20px',
      backgroundColor: 'lightgray'
    },
    navbarLink: {
      textDecoration: 'none',
      color: 'black',
      marginRight: 20
    },
    image: {
      width: 200,
      height: 200,
      objectFit: 'cover'
    }
  };
  
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
    <body>
      <div class="navbar">
        <div>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <input type="text" placeholder="Search"></input>
        </div>
      </div>
    </body>

        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {companyName && <div>
              <p>Company name: {companyName.company_name}</p>
              <p>Men's Average Salary: {companyName.men_salary}</p>
              <p>Women's Average Salary: {companyName.women_salary}</p>
            </div>
        }
        
    </div>
  );
}

export default App;
