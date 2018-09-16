import React from 'react'
import posed from 'react-pose'

import { StyledNotification, StyledNotificationBody } from './style'
import { StyledEmoji } from '../styled'

const Animator = posed.div({
  hidden: {
    y: -180,
    transition: {
      duration: 200
    }
  },
  visible: {
    y: -80,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 18
    }
  }
})

class Notification extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false,
      message: getMessage(this.props.message)
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isVisible: true })
    }, 800)
    setTimeout(() => {
      this.setState({ isVisible: false })
    }, 5000)
  }

  handleClick = () => {
    this.setState({ isVisible: false })
  }

  render () {
    const { isVisible, message } = this.state
    return (
      <Animator
        className='notification'
        pose={isVisible ? 'visible' : 'hidden'}
      >
        <div onClick={this.handleClick}>{message}</div>

      </Animator>
    )
  }
}

function getMessage (type) {
  if (type === 'initial') {
    return (
      <StyledNotification>
        <StyledNotificationBody>
          {' '}<p>
            This resume is
            {' '}
            <em>interactive</em>
            . Try to change the white boxes!
            {' '}
          </p>
          <StyledEmoji size={'28px'}>😜</StyledEmoji>
        </StyledNotificationBody>
      </StyledNotification>
    )
  } else {
    console.log('Notif Error: No message found')
    return null
  }
}

export default Notification
