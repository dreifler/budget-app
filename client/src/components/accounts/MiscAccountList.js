import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../../actions';

class MiscAccountList extends Component {
    componentDidMount() {
        this.props.fetchAccounts();
    }

    renderMiscAccounts() {
        return this.props.accounts.reverse().map(account => {
            switch (account.type.toLowerCase()) {
                case 'investment':
                case 'bank':
                case 'savings':
                case 'checking':
                case 'debt':
                    return;
                default:
                    return (
                        <div className="list-group" key={account._id}>
                            <li className="list-group-item"> ${account.amount} {account.accountName} {account.type}</li>
                        </div>
                    );
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Other Accounts</h3>
                {this.renderMiscAccounts()}
            </div>
        );
    }
}

function mapStateToProps({accounts}) {
    return { accounts };
}

export default connect(mapStateToProps, { fetchAccounts })(MiscAccountList);