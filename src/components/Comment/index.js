import React from 'react'
import styled from 'styled-components'

const StyledComment = styled.div`
  color: hsla(0, 0%, 60%, 1);
  font-style: italic;
`
StyledComment.displayName = 'StyledComment'

function Comment ({ comment }) {
  return (
    <StyledComment>
      {`// ${comment}`}
    </StyledComment>
  )
}

export default Comment
