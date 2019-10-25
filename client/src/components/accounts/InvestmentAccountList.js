import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../../actions';

class InvestmentAccountList extends Component {
    componentDidMount() {
        this.props.fetchAccounts();
    }

    renderInvestmentAccounts() {
        return this.props.accounts.reverse().map(account => {
            if(account.type.toLowerCase() === 'investment'){
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
                <h3>Investment Accounts</h3>
                {this.renderInvestmentAccounts()}
            </div>
        );
    }
}

function mapStateToProps({accounts}) {
    return { accounts };
}

export default connect(mapStateToProps, { fetchAccounts })(InvestmentAccountList);