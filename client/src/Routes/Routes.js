import Register from './../view/register/';
import confirmation from './../view/confirmation/';
import forgot from "./../view/forgot/";
import forgot1 from "./../view/forgot/forgot1";
import newPassword from "./../view/forgot/newPassword";
import Login from "./../view/login/";
import React from 'react';
//import { connect } from "react-redux";
import { Route, BrowserRouter } from 'react-router-dom';

const Routes = () => {
    return (
        <>
            <BrowserRouter>
            <Route exact path="/account/login" component={Login} />
            <Route exact path="/account/register" component={Register} />
            <Route exact path="/confirmation" component={confirmation}/>
            <Route exact path="/forgot" component={forgot}/>
            <Route exact path="/verif" component={forgot1}/>
            <Route exact path="/newPassword" component={newPassword}/>
            </BrowserRouter>
        </>
    )
}


export default Routes;