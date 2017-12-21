// import React, { Component } from 'react';
// import Rnd from 'react-rnd';

// import '../assets/css/App.css';
// import cross from '../assets/images/error.png';

// class RnDWrapper extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       x: 10,
//       y: 80,
//       width: 150,
//       height: 50,
//       index: this.props.index
//     };
//     this.onDragStop = this.onDragStop.bind(this);
//     this.onResizeStop = this.onResizeStop.bind(this);
//   }

//   onResizeStop(e, direction, ref) {
//     this.setState({
//       width: ref.offsetWidth,
//       height: ref.offsetHeight,
//     });
//     this.props.onRsizeFunc(this.state.index, ref.offsetWidth, ref.offsetHeight);
//   }

//   onDragStop(e, d) {
//     let x = d.x < 0 ? 0 : d.x;
//     let y = d.y < 0 ? 0 : d.y;
//     const { width, height } = this.state;
//     x = x + width > 880 ? 880 - width : x;
//     y = y + height > 550 ? 550 - height : y;
//     this.setState({ x, y });
//     this.props.onDragStopFunc(this.state.index, x, y);
//   }

//   render() {
//     return (
//       <Rnd
//         size={{ width: this.state.width, height: this.state.height }}
//         position={{ x: this.state.x, y: this.state.y }}
//         onDragStop={this.onDragStop}
//         onResize={this.onResizeStop}
//       >
//         <div className="outerDiv">
//           <img className="deleteComp" src={cross} onClick={() => (this.props.deleteComponent(this.state.index))} />
//           {this.props.component}
//         </div>
//       </Rnd>
//     );
//   }
// }

// export default RnDWrapper;
