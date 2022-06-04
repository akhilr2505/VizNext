import React, {useState, useEffect} from "react";
import { useUserAuth } from "../context/UserAuthContext";
import {db} from "../firebase"
import { getDoc, doc} from "firebase/firestore"
import NavbarComponent from "../components/NavbarComponent";
import "./HomePage.css"

const HomePage = () => {
  const { user } = useUserAuth();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const getUserDetails = async () => {
              const snap = await getDoc(doc(db, 'users', user.email))
              setUserDetails(snap.data())
            }
    getUserDetails()
    console.log(userDetails)
  }, [userDetails, user.email])

 
  if(userDetails.role === "student") {
    return (
      <div className="homePage">
        <NavbarComponent />
        <div className="mainHomePage">
        <h1>Home page</h1>
        <div className="firstDiv">
          Welcome Student<br />
          {user && user.email}
        </div>
        <div className="logoutButton">
        </div>
        </div>
        
      </div>
    );
  }
  else {
    return (
      <div className="homePage">
        <NavbarComponent />
        <div className="mainHomePage">
        <h1>Home Page</h1>
        <div className="firstDiv">
          Welcome Admin<br />
          {user && user.email}
        </div>
        <div className="logoutButton">
        </div>
        </div>
        
      </div>
    );
  }
  
};

export default HomePage;