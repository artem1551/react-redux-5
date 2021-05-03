export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  }
}

export function AddBoxAction(state) {
  return {
    type: 'ADD_BOX',
    state
  }
}

export function SetActiveTooltipAction(state) {
  return {
    type: 'SET_ACTIVE_TOOLTIP',
    state
  }
}

export function ResetTooltipAction() {
  return {
    type: 'DISABLE_TOOLTIP'
  }
}

export function ResetBoxesAction() {
  return {
    type: 'RESET_BOXES'
  }
}

export function UpdateBox(state) {
  return {
    type: 'UPDATE_BOX',
    state
  }
}