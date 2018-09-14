import EnthusiasmLevelInput from '../../components/EnthusiasmLevelInput'
import { connect } from 'react-redux'
import { enthusiasmEntered } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    enterEnthusiasmLevel (enthusiasmInput) {
      dispatch(enthusiasmEntered(enthusiasmInput))
    }
  }
}

export default connect(null, mapDispatchToProps)(EnthusiasmLevelInput)
