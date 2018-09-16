import React, { Component } from 'react'

import { AppWrapper } from '../../containers'

import { Notification } from '..'

class App extends Component {
  render () {
    return (
      <div>
        <Notification message={'initial'} />

        <AppWrapper />

      </div>
    )
  }
}

export default App
