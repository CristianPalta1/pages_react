import React from 'react';

import Navbar from './Navbar';
import InicioContainer from './InicioContainer';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <InicioContainer />
    </React.Fragment>
  );
}

export default Layout;
