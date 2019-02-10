import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Card,
    CardBody,
    Collapse,
    FormGroup,
    Label,
    Input,
    Jumbotron
} from 'reactstrap';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return(
            <div>
                <Jumbotron>
                    <div className="row justify-content-center">
                        <h2 className="align-self-center">{this.props.auth.userName}'s Profile</h2>
                    </div>
                    <div>
                        <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>Edit
                            Profile</Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBody>
                                    <FormGroup>
                                        <Label for="userName">Name</Label>
                                        <Input type="text" name="userName" id="userName"
                                               placeholder={this.props.auth.userName}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="activeBudget">Active Budget</Label>
                                        <Input type="select" name="activeBudget" id="activeBudget" multiple>
                                            <option>Budget 1</option>
                                            <option>Budget 2</option>
                                            <option>Budget 3</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="notes">Text Area</Label>
                                        <Input type="textarea" name="text" id="notes"/>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Profile);