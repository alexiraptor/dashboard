import { Link } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import React from "react";

function Header (props)
{   
    // console.log("ISLOGGEDIN : ")
    // console.log(props.IsloggedIn);

    return(
        <div>
            <Navbar className="navbar">
                <nav className="mr-auto navbar_wrapperone">
                    <Link to="/home">Home</Link>
                    {props.IsloggedIn 
                    ? 
                    <Link to="/widgetslist">Browse widgets</Link>
                    :
                    null
                    }
                </nav>
                <div className="widget-main">
                    <p>DashBoard</p>
                    <h5>Widgets</h5>
                </div>
                <nav className="mr-auto navbar_wrappertwo">
                    {props.IsloggedIn 
                    ? 
                    <Link id="logout" className="nav-link" to={"/logout"}>Logout</Link>
                    :
                    <div>
                    <Link id="login" className="nav-link" to={"/sign-in"}>Login</Link> 
                    <Link id="signin" className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </div>
                    }
                </nav>
            </Navbar>
        </div>
    )
}

export default Header