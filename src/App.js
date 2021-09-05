import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');

  const modeChanger = () => {

    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = '#1d1d1d';
      document.body.style.color = 'white';

    }

    else {

      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';

    }

  };

  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {

    setAlert({

      type: type,
      msg: msg

    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);

  }

  return (

    <>

      <Router>

        <Navbar mode={mode} modeChanger={modeChanger} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/">
            <TextForm showAlert={showAlert} mode={mode} />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>


        </Switch>

      </Router>

    </>

  );
}

export default App;