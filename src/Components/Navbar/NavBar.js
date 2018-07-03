import React from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarComponent extends React.Component {

    // componentDidMount() {
    //     // this.props.dispatch(userActions.getAll());
    // }
    constructor(props){
        super(props);
        this.state = {
            loggingIn: ''    
        };
    }

    render() {

        const { authentication } = this.props;
        console.log(authentication);

        const { loggingIn } = this.props;
        console.log(loggingIn);

        return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                <a href='/'>Rent Drive</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem>
                        My Activities
                    </NavItem>
                    <NavItem>
                        Rent a car
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Profile 
                    </NavItem>
                    <NavItem  href="/login">
                        { loggingIn  &&
                            "Logout"}
                        { !loggingIn  &&
                            "Login"}
                    </NavItem>  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}


export { NavBarComponent as NavBar };
