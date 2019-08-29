

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Carousel from './Carousel';
import Badge from './Badge';
import Forms from './Forms';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Badges} />
          <Route exact path="/Dashboard/Ingreso" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Badge/>
        {/* <Forms/> */}
      
      
    </div>
  );
}

export default App;
