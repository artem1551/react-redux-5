import * as React from 'react';
import { connect } from 'react-redux';
import { SetActiveTooltipAction } from '../store/actions';


class CustomDivEl extends React.Component {

  constructor({dispatch, ...props}) {
    super();
    this.props = props;
    this.dispatch = dispatch;
  }

  componentDidMount() {
    document.body.addEventListener('click', this.outsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.outsideClick);
  }

  onClick = (e) => {
    e.stopPropagation();
    const {boxes, dispatch, ...tooltipInfo} = this.props;
    this.dispatch(SetActiveTooltipAction(tooltipInfo))
  }

  render() {return (
    <div style={{
      top: this.props.top,
      left: this.props.left,
      position: "absolute",
      backgroundColor: this.props.color,
      width: this.props.width,
      height: this.props.height,
      transform: 'translate(-50%, -50%)'
    }}
    onClick={this.onClick}>
    </div>
  )}
}

export default connect(s => s)(CustomDivEl);