import React, { Fragment } from "react";
import "./App.css";
import { Router, Reditect } from "@reach/router";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { NavBar } from "./components/NavBar";

import styled from 'styled-components'

export const Div = styled.div`
 
  bottom: 0;
  

 `

function App() {
  return (
    <Fragment>   
      <NavBar />   
        <Router>
          <Home path="/" />
          <LogIn path="/login" />
        </Router>
     
    </Fragment>
  );
}

export default App;
