import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Jumbotron
} from 'reactstrap';


class Dashboard extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <div className="row justify-content-center">
                        <h2 className="align-self-center">Dashboard</h2>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Dashboard);