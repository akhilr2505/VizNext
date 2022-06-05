import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { db } from "../firebase"
import { getDoc, doc } from "firebase/firestore"
import "./NavbarComponent.css";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const NavbarComponent = () =>
{


  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [ userDetails, setUserDetails ] = useState( [] );
  const [ count, setCount ] = useState( 0 );

  useEffect( () =>
  {
    setCount( count + 1 )
    if ( count > 2 )
    {
      return
    }
    const getUserDetails = async () =>
    {
      const snap = await getDoc( doc( db, 'users', user.email ) )
      setUserDetails( snap.data() )
    }
    getUserDetails()
    console.log( userDetails )
    if ( userDetails.role )
    {
      sessionStorage.setItem( "role", userDetails.role )
    }
  }, [ userDetails ] )

  console.log( "USER:", user, user.role )
  console.log( "USER LOCAL:", sessionStorage.getItem( "role" ) )
  const handleLogout = async () =>
  {
    try
    {
      await logOut();
      navigate( "/" );
    } catch ( error )
    {
      console.log( error.message );
    }
  };

  if ( userDetails.role === "donor" || sessionStorage.getItem( "role" ) === "donor" )
  {
    return (
      <div className="mainNav">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home">VizNext</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/donor">Donor</Nav.Link>
            </Nav>
            <Button variant="primary" onClick={ handleLogout }>
              Log out
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }
  if ( userDetails.role === "admin" || sessionStorage.getItem( "role" ) === "admin" )
  {
    return (
      <div className="mainNav">
        <Navbar bg="dark" variant="dark" style={ { backgroundcolor: "#242F9B" } }>
          <Container>
            <Navbar.Brand href="/home">VizNext</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/admin">Admin</Nav.Link>

            </Nav>
            <Button variant="primary" onClick={ handleLogout }>
              Log out
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }
  if ( userDetails.role === "coordinator" || sessionStorage.getItem( "role" ) === "coordinator" )
  {
    return (
      <div className="mainNav">
        <Navbar bg="dark" variant="dark" style={ { backgroundcolor: "#242F9B" } }>
          <Container>
            <Navbar.Brand href="/home">VizNext</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/coordinator">Coordinator</Nav.Link>

            </Nav>
            <Button variant="primary" onClick={ handleLogout }>
              Log out
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }
  if ( userDetails.role === "management" || sessionStorage.getItem( "role" ) === "management" )
  {
    return (
      <div className="mainNav">
        <Navbar bg="dark" variant="dark" style={ { backgroundcolor: "#242F9B" } }>
          <Container>
            <Navbar.Brand href="/home">VizNext</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/management">Management</Nav.Link>

            </Nav>
            <Button variant="primary" onClick={ handleLogout }>
              Log out
            </Button>
          </Container>
        </Navbar>
      </div>
    );
  }

};

export default NavbarComponent