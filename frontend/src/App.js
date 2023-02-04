import logo from './logo.svg';
import { useState } from 'react'
import axios from "axios";
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null)

  
  function getData() {
    
    axios({
      method: "GET",
      url:"http://localhost:5000/testing",
    })
    .then((response) => {
      const res =response.data
      setProfileData({
        profile_name: res.name,
        about_me: res.about})
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
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}
    </div>
  );
}

export default App;
