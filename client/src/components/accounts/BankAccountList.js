import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccounts } from '../../actions';
import { Link } from 'react-router-dom';

class BankAccountList extends Component {
    componentDidMount() {
        this.props.fetchAccounts();
    }

    renderBankAccounts() {
        return this.props.accounts.reverse().map(account => {
            switch (account.type.toLowerCase()){
                case 'checking':
                case 'savings':
                case 'bank':
                    return (
                        <div className="list-group" key={account._id}>
                            <li className="list-group-item">${account.amount} {account.accountName}</li>
                            <Link to={"/edit/" + this.props.obj._id} className="float-right btn btn-primary">Edit</Link>
                        </div>
                    );
            }
            if(account.type.toLowerCase() === 'checking' || account.type.toLowerCase() === 'savings' || account.type.toLowerCase() === 'bank'){
                return (
                    <div className="list-group" key={account._id}>
                        <li className="list-group-item">{account.accountName}  ${account.amount}</li>
                    </div>
                );
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Bank Accounts</h3>
                {this.renderBankAccounts()}
            </div>
        );
    }
}

function mapStateToProps({accounts}) {
    return { accounts };
}

export default connect(mapStateToProps, { fetchAccounts })(BankAccountList);