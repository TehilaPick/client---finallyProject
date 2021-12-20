import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import Toast from 'react-bootstrap/Toast';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


function App() {

  useEffect(async () => {

    const response = await fetch('http://localhost:3001/getAllContacts');
    await response.json().then(res => {
      //שינוי
      console.log(res);
    });


  }, [])
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <InputGroup  className="p-3 SearchBox">
       <InputGroup.Text dir="rtl" id="inputGroup-sizing-default">חיפוש</InputGroup.Text>
       <FormControl 
         aria-label="Default"
         aria-describedby="inputGroup-sizing-default"
       />
     </InputGroup>
    </div>
  );
}

export default App;
