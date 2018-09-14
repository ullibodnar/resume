import React from 'react'

import { StyledEnthusiasmLevelInput } from '../styled'

function EnthusiasmLevelInput ({ enterEnthusiasmLevel }) {
  return (
    <StyledEnthusiasmLevelInput
      placeholder={'5'}
      onBlur={e => enterEnthusiasmLevel(e.target.value)}
    />
  )
}

export default EnthusiasmLevelInput
