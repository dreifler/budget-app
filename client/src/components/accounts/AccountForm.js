import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import AccountField from './AccountField';
import formFields from './formFields';

class AccountForm extends Component {
    renderFields(){
        return _.map(formFields, ({ label, name }) =>{
            return (
                <Field key={name} component={AccountField} type="text" label={label} name={name} />
            );
        });
    }
    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onAccountSubmit)}>
                    {this.renderFields()}
                    <Link to="/dashboard" className="btn btn-danger">
                        Cancel
                    </Link>
                    <button className="btn btn-success" type="submit">
                        Next
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    _.each(formFields, ({name}) => {
        if(!values[name]){
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'accountForm',
    destroyOnUnmount: false
})(AccountForm);