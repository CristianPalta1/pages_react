

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Navbar from "./Navbar";
import Carousel from './Carousel';
import Badge from './Badge';
import Forms from './Forms';
import Dashboard from '../pages/Dashboard';
import IngresoDoc from '../pages/IngresoDoc';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Dashboard/Ingreso_Documentos" component={IngresoDoc} />
          <Route exact path="/Dashboard/Notificacion_Documentos" component={Noti} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;