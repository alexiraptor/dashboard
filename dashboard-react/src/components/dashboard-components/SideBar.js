import {Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SideBar (props)
{
    return(
        <div>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    Panel
                </div>
                {props.IsloggedIn 
                ?
                <div>
                <Nav.Item>
                    <Link to="/mywidgets">Favorites Widegets</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/mywidgets">Recently Added</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="/mywidgets">Manage My widgets</Link>
                </Nav.Item>
                </div>
                :
                null
                }
            </Nav>
        </div>
    )
}

export default SideBar