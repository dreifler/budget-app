import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../../actions';

class DebtAccountList extends Component {
    componentDidMount() {
        this.props.fetchAccounts();
    }

    renderDebtAccounts() {
        return this.props.accounts.reverse().map(account => {
            if(account.type.toLowerCase() === 'debt'){
                return (
                    <div className="list-group" key={account._id}>
                        <li className="list-group-item">${account.amount} {account.accountName}</li>
                    </div>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Debt Accounts</h3>
                {this.renderDebtAccounts()}
            </div>
        );
    }
}

function mapStateToProps({accounts}) {
    return { accounts };
}

export default connect(mapStateToProps, { fetchAccounts })(DebtAccountList);