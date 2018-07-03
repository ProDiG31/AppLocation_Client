import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarComponent extends React.Component {

    // componentDidMount() {
    //     // this.props.dispatch(userActions.getAll());
    // }

    render() {

        // const { user } = this.props
 
        return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a>Rent Drive</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        My Activities
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Rent a car
                    </NavItem>
                    {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown> */}
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Profile
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        <Link to="/login">Logout </Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}


export { NavBarComponent as NavBar };
