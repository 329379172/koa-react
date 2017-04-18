import { render } from 'react-dom';
import { logger } from 'redux-logger';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

const React = require('react');

import HomeComponent from './components/home';

render((
    <HashRouter>
        <Route path="/" component={HomeComponent} />
    </HashRouter>
), document.getElementById('app'));


