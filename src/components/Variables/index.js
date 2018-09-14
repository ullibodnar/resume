import React from 'react'

import { StyledSection } from '../styled'
import { Comment } from '..'
import { EnthusiasmLevelInput } from '../../containers'

import { Purple, Blue, Grey, Green, Red, StyledTab } from '../styled'

function Variables () {
  return (
    <StyledSection>
      <Comment comment={'Global Variables'} />
      <div>
        <Purple>const</Purple>
        <Red> enthusiasmLevel</Red>
        <Grey> = </Grey>
        <EnthusiasmLevelInput />
      </div>

      <div>
        <Purple>const</Purple>
        <Red> name</Red>
        <Grey> = </Grey>
        <Green>'Ulli</Green>
      </div>

    </StyledSection>
  )
}

const myName = 'Ulli'

export default Variables
