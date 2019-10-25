import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AccountForm from './AccountForm';
import AccountFormReview from './AccountFormReview';

class AccountNew extends Component {
    state = { showReview: false };

    renderContent() {
        if(this.state.showFormReview){
            return <AccountFormReview
                onCancel={() => this.setState({ showFormReview: false })}
            />;
        }

        return (
            <AccountForm
                onAccountSubmit={() => this.setState({showFormReview: true})}
            />
        );
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form: 'accountForm'
})(AccountNew);