import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './components/register';
import Login from './components/login';
import Home from './components/home';


function App() {



  useEffect(async () => {

    // const response = await fetch('http://localhost:3001/login/mirinizri15@gmail.com');
    // await response.json().then(res => {
    //   //שינוי
    //   console.log(res);
    // });


  }, [])


  return (
    <div className="App">

<Router>
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
     <Navbar.Brand >ארועים</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link >
        <Link to="/register">הרשמה</Link>
        </Nav.Link>
        <Nav.Link >
        <Link to="/login">התחברות</Link>
        </Nav.Link>
        <Nav.Link >
        <Link to="/home">דף הבית</Link>
        </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
        {/* <nav>
          <ul> */}
            {/* <li>
              <Link to="/">בית</Link>
            </li> */}
            {/* <li>
              <Link to="/register">הרשמה</Link>
            </li>
            <li>
              <Link to="/login">התחברות</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          {/* <Route path="/">
            <App />
          </Route> */}
        </Switch>
      </div>
    </Router>

 
{/* 
       <InputGroup  className="p-3 SearchBox">
       <InputGroup.Text dir="rtl" id="inputGroup-sizing-default">חיפוש</InputGroup.Text>
       <FormControl 
         aria-label="Default"
         aria-describedby="inputGroup-sizing-default"
       />
       </InputGroup> */}
    </div>
  );
}

export default App;
