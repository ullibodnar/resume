import React from 'react'

import { StyledSection } from '../styled'
import { Comment } from '..'
import { Purple, Blue, Grey, Green, StyledTab } from '../styled'

function Introduction () {
  return (
    <StyledSection>
      <Comment comment={'Introduction'} />
      <Purple>const </Purple>
      <Blue>giveIntroduction </Blue>
      <Grey>= () </Grey>
      <Purple> =&gt;</Purple>
      <StyledTab>
        <Green>
          'Ulli is a Junior front-end web developer, actively seeking a role in the exciting industry.'
        </Green>
      </StyledTab>

    </StyledSection>
  )
}

export default Introduction

const giveIntroduction = () =>
  'Ulli is a Junior front-end web developer, actively seeking a role in the exciting industry.'
