import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route component={Home} exact path="/"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Routes
