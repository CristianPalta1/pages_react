

import React from 'react';
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
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Badge/>
        {/* <Forms/> */}
      
      
    </div>
  );
}

export default App;
