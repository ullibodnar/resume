import React from 'react'

import { StyledSection } from '../styled'
import { Comment } from '..'
import { Purple, Blue, Grey, Green, Red, StyledTab } from '../styled'

function Introduction ({ enthusiasm }) {
  return (
    <StyledSection top={'30px'}>
      <Comment comment={'Introduction'} />
      <Purple>const </Purple>
      <Blue>giveIntroduction </Blue>
      <Grey>= (</Grey>
      <Red>enthusiasmLevel</Red>
      <Grey>)</Grey>
      <Purple> =&gt;</Purple>
      <StyledTab>
        <Green>
          {giveProperIntroduction(enthusiasm)}
        </Green>
      </StyledTab>

    </StyledSection>
  )
}

function giveProperIntroduction (enthusiasm) {
  if (enthusiasm == 5) {
    return `Ulli is a Junior front-end web developer, actively seeking a role in one of todays most exciting industries.`
  } else if (enthusiasm < 1) {
    return 'Ulli is seeking to land a job as a web developer.'
  } else if (enthusiasm < 5) {
    return 'Ulli is a Junior front-end web developer, hoping to maybe someday land a role in the the web development industry.'
  } else if (enthusiasm < 8) {
    return 'Ulli is a Junior front-end web developer, whom has a strong passion for coding. He is actively seeking a role in one of todays most exciting industries!'
  } else if (enthusiasm < 9) {
    return 'Ulli is a Junior front-end web developer, whom has a strong passion for coding. He is actively seeking a role in one of todays most exciting industries!!!'
  } else if (enthusiasm >= 9) {
    return 'Ulli is a Junior front-end web developer, whom has a strong passion for coding. He is actively seeking a role in one of todays most exciting industries!!! He is super excited to join the team and make a difference 😄'
  } else {
    return 'Ulli is seeking to land a job as a web developer. He also thinks you should choose a real number, he is very enthused!'
  }
}

export default Introduction
