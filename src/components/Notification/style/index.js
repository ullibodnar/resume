import styled from 'styled-components'

const StyledNotification = styled.div`
  height: 180px;
  width: 100%;
  position: absolute;
  display: flex;
  background: red;
  color: white;
  justify-content: center;
`
StyledNotification.displayName = 'StyledNotification'

const StyledNotificationBody = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  align-self: flex-end;
`
StyledNotificationBody.displayName = 'StyledNotificationBody'

export { StyledNotification, StyledNotificationBody }
