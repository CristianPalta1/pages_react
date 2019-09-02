import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

// import './styles/Navbar.css';
// import logo from '../images/logo.svg';

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" role="navigation">
  <img src="../assets/images/logo.jpeg" height="50" alt="Logo de seguridad del cauca" />

  <div class="navbar-header">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
  <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item" routerLinkActive="active">
        <a class="nav-link" routerLink="/inicio"> <fa-icon [icon]="faHome"> </fa-icon> Inicio</a>
      </li>
      <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/quienessomos">
        <fa-icon [icon]="faHotel"> </fa-icon> ¿Quienes Somos?</a></li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"
          >
          <fa-icon [icon]="faShoppingCart"> </fa-icon> Servicios</a>

        <div class="dropdown-menu">
          <a class="dropdown-item" routerLink="/servicios/SVE" routerLinkActive="active">
            <fa-icon [icon]="faMicrochip"></fa-icon> Seguridad Electronica 24/7</a>

          <a class="dropdown-item" routerLink="/servicios/segPrivada" routerLinkActive="active"
            >
            <fa-icon [icon]="faUserSecret"></fa-icon> Seguridad privada
            <!-- <fa-icon [icon]="faAngleDoubleRight"> </fa-icon> -->
          </a>
          <a class="dropdown-item" routerLink="/servicios/camaras" routerLinkActive="active">
            <fa-icon [icon]="faVideo"></fa-icon> Camaras de Seguridad
            <!-- <fa-icon [icon]="faAngleDoubleRight"> </fa-icon> -->
          </a>
          <a class="dropdown-item" routerLink="/servicios/estudioSeguridad" routerLinkActive="active">
            <fa-icon [icon]="faUserEdit"></fa-icon> Estudio de Seguridad</a>
          <a class="dropdown-item" routerLink="/servicios/Escolta" routerLinkActive="active">
            <fa-icon [icon]="faUserShield"></fa-icon> Escolta a Personas y Mercancías</a>
        </div>
      </li>
      <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/contactanos">
        <fa-icon [icon]="faPhoneVolume"> </fa-icon> Contactanos</a></li>
      
      <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/cotizacion">
        <fa-icon [icon]="faHandshake"> </fa-icon> Cotizaciones</a></li>
      <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/serviciocliente">
        <fa-icon [icon]="faTools"> </fa-icon> Servicio Al Cliente</a></li>
      <li class="nav-item" routerLinkActive="active"><a class="nav-link" routerLink="/login">
        <fa-icon [icon]="faUserLock"> </fa-icon> Inicio Sesión</a></li>

      <!--
        <li class="nav-item" routerLinkActive="active">
          <a (click)="logout()" class="nav-item nav-link"  >Logout</a>
        </li>
        <li class="nav-item" routerLinkActive="active">
            <a class="nav-link" routerLink="/contacto">Contactanos</a>
        </li>
      -->
    </ul>
  </div>
</nav>
    );
  }
}

export default Navbar;
