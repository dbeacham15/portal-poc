import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IconExplorer from './containers/iconExplorer';
import ComponentExplorer from './containers/componentExplorer/ComponentExplorer';

import { Switch, BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import GlobalStyle from './assets/styled/GlobalStyle';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
    <Provider store = { store }>
        <Router>
            <Switch>
                <DefaultLayout exact path="/" component={ App } />
                <DefaultLayout exact path="/components" component={ ComponentExplorer } />
                <DefaultLayout exact path="/component/:id" component={ ComponentExplorer } />
                <DefaultLayout exact path="/icons" component= { IconExplorer } />
            </Switch>
        </Router>
        <GlobalStyle />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
