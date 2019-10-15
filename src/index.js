import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import Layout from 'containers/layout'
const history = createBrowserHistory()
const middleWare = [thunk, routerMiddleware(history)]

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleWare))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

