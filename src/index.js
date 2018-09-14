import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components'

import registerServiceWorker from './registerServiceWorker'
import configureStore from './state/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
