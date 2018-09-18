import styled from 'styled-components'

const StyledNotification = styled.div`
  height: 180px;
  width: 100%;
  background: red;
  color: white;
  position: absolute;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 3px 20px rgba(0,0,0,0.2), 0 3px 20px rgba(0,0,0,0.2);
`
StyledNotification.displayName = 'StyledNotification'

const StyledNotificationBody = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
`
StyledNotificationBody.displayName = 'StyledNotificationBody'

export { StyledNotification, StyledNotificationBody }
