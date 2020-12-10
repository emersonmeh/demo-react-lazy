import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import Router from './routes';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <h1>DEMO !!!</h1>
        <br />
        <Link to='/page1'>Page1</Link> <br />
        <Link to='/page2'>Page2</Link> <br />
        <Link to='/page3'>Page3</Link> <br /> 
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
