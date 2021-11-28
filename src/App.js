import React from 'react';
import Routing from './Components/AppRouting';
import { withRouter } from 'react-router';
import NavBar from './Components/NavBar';


function App() {

  let landing = false;

  if (window.location.pathname != '/') {
    landing = true;
  }

  return (
    <div className="App">
      {landing && <NavBar />}
      <Routing />
    </div>
  );
}

export default withRouter(App);
