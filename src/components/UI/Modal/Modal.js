import React, { Component, Fragment } from "react";

import "./Modal.css";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  // componentWillUpdate(){
  //   console.log('[Modal] Will Update  ')
  // }
  render() {
    return (
      <Fragment>
        {this.props.show ? (
          <div className={"Backdrop"} onClick={this.props.modalClosed} />
        ) : null}
        <div
          className={"Modal"}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
