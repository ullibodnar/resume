import styled from 'styled-components'

const Input = styled.input`
  padding: 6px 4px;
  border-radius: none;
  font-size: 18px;
  width: auto;
  box-shadow: none;
  border: none;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 3px 20px rgba(0,0,0,0.7), 0 3px 20px rgba(0,0,0,0.7);
  }
`
Input.displayName = 'StyledInput'

const EnthusiasmLevelInput = styled(Input)`
  width: 35px;
  text-align: center;
`
EnthusiasmLevelInput.displayName = 'StyledEnthusiasmLevelInput'

export { Input, EnthusiasmLevelInput }
