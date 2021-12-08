import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'

function App() {

  useEffect(async () => {

    const response = await fetch('http://localhost:3001/getUsers');
    await response.json().then(res => {
      //שינוי
      console.log(res);
    });


  }, [])
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
