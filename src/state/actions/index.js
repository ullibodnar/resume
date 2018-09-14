import { ENTHUSIASM_ENTERED } from '..'

function enthusiasmEntered (enthusiasmInput) {
  return {
    type: ENTHUSIASM_ENTERED,
    payload: enthusiasmInput
  }
}

export { enthusiasmEntered }
