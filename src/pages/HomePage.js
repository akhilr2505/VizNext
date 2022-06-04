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
  }, [])

 
  
    return (
      <>
        <NavbarComponent />
      <div className="homePage">
      
        <div className="mainHomePage">
        <h1>Home page</h1>
        <div className="firstDiv">
          Welcome 
        </div>
        <div className="logoutButton">
        </div>
        </div>
        
      </div>
      </>
    );
  
  
};

export default HomePage;