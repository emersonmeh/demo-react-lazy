import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/page1" component={Page1} /> 
            <Route exact path="/page2" component={Page2} /> 
            <Route exact path="/page3" component={Page3} /> 
        </Switch>
    )
  }


export default Router;