import { render} from 'react-dom';
import { logger } from 'redux-logger';
import { Router, Route, hashHistory } from 'react-router';

const React = require('react');

import HomeComponent from './components/home';

render((
    <Router history={hashHistory}>
        <Route path="/" component={HomeComponent}/>
    </Router>
), document.getElementById('app'));


