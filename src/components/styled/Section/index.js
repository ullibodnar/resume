import styled from 'styled-components'

const Section = styled.div`
  margin-top: ${props => props.top || '10px'};
  margin-bottom: ${props => props.bottom || '10px'};
  margin-left: ${props => props.left || '10px'};
  margin-right: ${props => props.right || '10px'};

`
Section.displayName = 'StyledSection'

export default Section
