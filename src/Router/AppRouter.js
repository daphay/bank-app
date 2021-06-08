import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../Components/Login';
import Register from '../Components/Register';

const AppRouter = () => {
    return(
        <Router>
            <div className='container'>
                <Switch>
                    <Route path='/' component={Login} exact={true} />
                    <Route path='/register' component={Register} />
                </Switch>
            </div>
        </Router>
    );
};

const mapStateToProps = (state) => ({
    auth : state.auth
});

export default connect(mapStateToProps)(AppRouter);