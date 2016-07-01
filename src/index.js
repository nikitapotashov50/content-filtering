import React from 'react'
import {Provider} from 'react-redux'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/app'
import reducer from './reducers'
import './style.css'
import createLogger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'

const logger = createLogger()
const store = createStore(reducer,applyMiddleware(logger))

render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('main'));
