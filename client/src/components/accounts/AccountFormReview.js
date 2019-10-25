import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const AccountFormReview = ({ onCancel, formValues, submitAccount, history }) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="btn btn-danger" onClick={onCancel}>
                Back
            </button>
            <button
                onClick={() => submitAccount(formValues, history)}
                className="btn btn-success float-right">
                Submit Account
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.accountForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(AccountFormReview));