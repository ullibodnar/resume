import React, { Component } from 'react'
import styled from 'styled-components'

import { Introduction } from '..'

const StyledApp = styled.div`
  padding: 12px;
  font-size: 16px;
`
StyledApp.displayName = 'StyledApp'

class App extends Component {
  render () {
    return (
      <StyledApp className='App'>
        <Introduction />
      </StyledApp>
    )
  }
}

export default App
