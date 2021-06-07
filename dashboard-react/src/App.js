import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/dashboard-components/Header';
import Home from './components/dashboard-components/Home';
import WidgetList from './components/dashboard-components/WidgetList';
import MyWidgets from './components/dashboard-components/MyWidgets';
import SideBar from './components/dashboard-components/SideBar'
import Login from "./components/login.component";
import Logout from "./components/logout.component";
import SignUp from "./components/signup.component";
// import Weath from "./microservices/weather.js";
//import { useState } from 'react';
// import Tekken from "./microservices/tekkenf.js";
// import MCU from "./microservices/MCU.js"
import Deezer from "./microservices/music/PlayerDeezer";

function App() {
 
  const [IsloggedIn, setIsLoggedIn] = useState(localStorage.getItem("authtoken"));
 
  function setlogin(param) {
    setIsLoggedIn(param)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header IsloggedIn={IsloggedIn}/>
        {/* <Header /> */}
        <Container fluid className="Container">
          <Row>
              {/* {IsloggedIn 
              ?  */}
            <Col xs={2} id="sidebar-wrapper">
              <SideBar IsloggedIn={IsloggedIn} />
            </Col>
            {/* :
            null
            } */}
            <Col xs={10} id="page-content-wrapper">
              <Switch className="switch-box">
                    <Route exact path='/' component={Home} />
                    <Route path="/sign-in">
                      <Login setIsLoggedIn={setIsLoggedIn} />
                      <Login />
                      </Route>
                    <Route path="/sign-up" component={SignUp} />
                    <Route path="/logout" >
                      <Logout setIsLoggedIn={setlogin} />
                      {/* <Logout /> */}
                    </Route>
                <Route path="/home">
                  <Home />
                </Route>
                {IsloggedIn 
                ?
                <div>
                <Route path="/mywidgets">
                  <MyWidgets />
                </Route>
                <Route path="/widgetslist">
                  <WidgetList />
                </Route>
                <Route path="/deezer" component={Deezer}></Route>
                </div>
                :
                <Redirect to="/sign-in" />
                }
              </Switch>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
