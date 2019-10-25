import React from 'react';
import {
    Container
} from 'reactstrap';
import {Link} from "react-router-dom";
import BankAccountList from './accounts/BankAccountList';
import InvestmentAccountList from './accounts/InvestmentAccountList';
import DebtAccountList from './accounts/DebtAccountList';
import MiscAccountList from './accounts/MiscAccountList';


const Dashboard = () =>  {
        return (
            <div>
                <Container>
                    <div className="row">
                        <Link to="/accounts/new">
                            <button type="button" className="btn btn-primary">Add Account</button>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <BankAccountList/>
                        </div>
                        <div className="col-sm-4">
                            <InvestmentAccountList/>
                        </div>
                        <div className="col-sm-4">
                            <DebtAccountList/>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-sm-4">
                                <MiscAccountList/>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
};

export default Dashboard;