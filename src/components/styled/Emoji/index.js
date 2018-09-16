import styled from 'styled-components'

const Emoji = styled.p`
  display: inline;
  font-size: ${props => props.size || 'inherit'};
`
Emoji.displayName = 'StyledEmoji'

export { Emoji }
