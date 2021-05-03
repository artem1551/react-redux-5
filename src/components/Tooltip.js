import { connect } from 'react-redux';

const Tooltip = (props) => {

  return (
    <div style={{
      display: 'flex',
      position: 'absolute',
      left: props.left,
      top: props.top,
      flexDirection: 'column',
      transform: 'translate(-50%, -150%)',
      border: '1px solid black',
      borderRadius: '2px',
      zIndex: 10,
      boxShadow: '0px 2px 7px 3px grey',
      backgroundColor: 'whitesmoke'
    }} onClick={(e) => e.stopPropagation()}>
      <span>Top: {props.top}</span>
      <span>Left: {props.left}</span>
      <span>bgColor: {props.backgroundColor}</span>
      <span>width: {props.width}</span>
      <span>height: {props.height}</span>
    </div>
  )
}

export default connect()(Tooltip);