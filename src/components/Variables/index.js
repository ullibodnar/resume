import React from 'react'

import { StyledSection } from '../styled'
import { Comment } from '..'
import { EnthusiasmLevelInput } from '../../containers'

import {
  Purple,
  Blue,
  Grey,
  Green,
  Red,
  StyledTab,
  StyledVariable
} from '../styled'

function Variables () {
  return (
    <StyledSection>
      <Comment comment={'Global Variables'} />
      <StyledVariable>
        <Purple>import</Purple>
        <Grey> {'{'} </Grey>
        <Red> Resume, Curriculum Vitae</Red>
        <Grey> {'}'} </Grey>
        <Purple>from</Purple>
        <Green>
          {' '}
          <a href='https://github.com/ullibodnar' target={'_blank'}>
            'github.com/ullibodnar'
          </a>
          {' '}
        </Green>
      </StyledVariable>

      <StyledVariable>
        <Purple>const</Purple>
        <Red> enthusiasmLevel</Red>
        <Grey> = </Grey>
        <EnthusiasmLevelInput />
      </StyledVariable>

    </StyledSection>
  )
}

const myName = 'Ulli'

export default Variables
