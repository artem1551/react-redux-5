
const reducer = function(state = {}, action) {
  switch (action.type) {
    case 'SET_STATE':
      return {...state, ...action.state}
    case 'ADD_BOX':
      return {...state, boxes: [...state.boxes, action.state]}
    case 'SET_ACTIVE_TOOLTIP':
      return {...state, tooltip: action.state}
    case 'DISABLE_TOOLTIP': 
      return {...state, tooltip: null}
    case 'RESET_BOXES':
      return {...state, boxes: []}
    case 'UPDATE_BOX':
      const { width, height, color, index } = action.state;
      const newBoxes = [...state.boxes];
      const box = {...state.boxes[index], width, height, color};
      newBoxes.splice(index, 1, box);
      console.log(newBoxes)
      return {...state, boxes: newBoxes };
    default:
      return {...state}
  }
}

module.exports = reducer;