import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';


class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return  <NavItem>
                            <NavLink href="/auth/google">Login With Google</NavLink>
                        </NavItem>;
            default:
                return  <NavItem>
                            <NavLink href="/api/logout">Logout</NavLink>
                        </NavItem>
        }
     }

    render() {
        console.log(this.props);
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href={this.props.auth ? "/dashboard" : "/"}>
                    Budget App(DEV)
                </NavbarBrand>
                <Nav className="container">
                    <NavItem className="m-auto">
                        <NavLink href="/dashboard">
                            <h1>{this.props.auth.userName}</h1>
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    {this.renderContent()}
                </Nav>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);