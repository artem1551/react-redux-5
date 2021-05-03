import React from 'react';
import { connect } from 'react-redux';
import { UpdateBox } from '../store/actions';

class FormBoxSizes extends React.Component {
  constructor(
    {dispatch}, state
  ) {
    super();

    this.dispatch = dispatch;
  }

  componentWillReceiveProps (store, state) {
    this.store = store;
    this.setState({
      ...this.state,
      ...store.tooltip
    })
  }

  onValueChange(event, key) {
    this.setState({
      ...this.state,
      [key]: +event.target.value || event.target.value
    })
  }

  render() {
    return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
      onClick={(e) => e.stopPropagation()}>
        <div>
        width:
        <input type="text" value={this.state?.width} onChange={(e) => this.onValueChange(e, 'width')}/>
        </div>
        <div>
          height
          <input type="text" value={this.state?.height} onChange={(e) => this.onValueChange(e, 'height')}/>
        </div>
        <div>
          color
          <input type="color" value={this.state?.color} onChange={(e) => this.onValueChange(e, 'color')}/>
        </div>
        <button onClick={() => this.dispatch(UpdateBox(this.state))}>Apply</button>
    </div>
  )}
}

export default connect((s) => s)(FormBoxSizes);