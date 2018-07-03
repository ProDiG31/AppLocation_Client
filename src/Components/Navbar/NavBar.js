import React from 'react';
import './NavBar.css'

class NavBarComponent extends React.Component {

    // componentDidMount() {
    //     // this.props.dispatch(userActions.getAll());
    // }

    render() {

        // const { user } = this.props
 
        return (
            <div className="row">
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand mb-0 h1">Rent Drive</span>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="row">
                            <li className="active col-sm-3">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="col-sm-3">
                                <a className="nav-link" href="#">Tes</a>
                            </li>
                            <li className="col-sm-3">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <div className="col-sm-3">
                Rent Drive
                </div> */}
                {/* <div className="col-sm-3">
                One of three columns
                </div>
                <div className="col-sm-3">
                One of three columns
                </div>
                <div className="col-sm-3">
                One of three columns
                </div> */}
            </div> 
        );
    }
}


export { NavBarComponent as NavBar };
