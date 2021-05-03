
import { connect } from 'react-redux';
import CustomDivEl from './CustomDivEl';
import { AddBoxAction, ResetTooltipAction } from '../store/actions';
import Tooltip from './Tooltip.js';
import * as React from 'react'
import { ResetBoxesAction } from '../store/actions';
import FormBoxSizes from './FormBoxSizes';

class Wrapper extends React.Component {
  
  constructor({boxes, tooltip, dispatch}) {
    super();
    this.dispatch = dispatch;
    this.tooltip = tooltip;
    this.boxes = boxes;
  }

  componentDidMount() {
      document.body.addEventListener('click', this.myHandler);
  }

  componentWillUnmount() {
      document.body.removeEventListener('click', this.myHandler);
  }

  componentWillReceiveProps (state) {
    this.boxes = state.boxes;
    this.tooltip = state.tooltip;
  }

  myHandler = (e) => {
    const boxSettings = {
      left: e.clientX,
      top: e.clientY,
      color: this.getRandomColor(),
      height: 100,
      width: 100
    };

    this.dispatch(AddBoxAction(boxSettings));
    this.dispatch(ResetTooltipAction())
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

  render() {
    return <div>
      <button onClick={(e) => {
        this.dispatch(ResetBoxesAction());
        e.stopPropagation()}
      }>Reset boxes</button>
      {this.boxes.map((box, index) => {
        return (
        <CustomDivEl key={index} top={box.top} left={box.left} color={box.color} width={box.width} height={box.height} index={index}/>
        )
      })}
      {!this.tooltip
        ? ''
        : <Tooltip 
        top={this.tooltip.top}
        left={this.tooltip.left}
        backgroundColor={this.tooltip.color}
        width={this.tooltip.width}
        height={this.tooltip.height}
      />}

      <FormBoxSizes/>
    </div>
  }
}
export default connect(s => s)(Wrapper);