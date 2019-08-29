

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
// import Navbar from "./Navbar";
// import Carousel from './Carousel';
// import Badge from './Badge';
// import Forms from './Forms';
import Layout from './Layout';
import Inicio from '../pages/Inicio';
import Dashboard from '../pages/Dashboard';
import IngresoDoc from '../pages/IngresoDoc';
import NotificDoc from '../pages/NotifiDoc';
import Registro from '../pages'
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Registro_Usuarios" component={Registros} />
          <Route exact path="/Dashboard/Ingreso_Documentos" component={IngresoDoc} />
          <Route exact path="/Dashboard/Notificacion_Documentos" component={NotificDoc} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
