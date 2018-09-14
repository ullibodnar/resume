import React from 'react'
import styled from 'styled-components'

import { Introduction, Experience, Variables } from '..'

const StyledApp = styled.div`
  padding: 12px;
  font-size: 16px;
`
StyledApp.displayName = 'StyledApp'

function AppWrapper () {
  return (
    <StyledApp>
      <Variables />
      <Introduction />
      <Experience />
    </StyledApp>
  )
}

export default AppWrapper
