import { connect } from 'react-redux'

import AppWrapper from '../../components/AppWrapper'
import { getEnthusiasmLevel } from '../../state'

function mapStateToProps (state) {
  return {
    enthusiasm: getEnthusiasmLevel(state)
  }
}

export default connect(mapStateToProps)(AppWrapper)
