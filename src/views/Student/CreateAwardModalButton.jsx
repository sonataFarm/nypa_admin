import React from 'react';
import Modal from 'react-responsive-modal';
import { TextMask } from 'react-text-mask-hoc';

const CLOSED_STATE = {
  open: false,
  errMsg: ''
};

export default class CreateAwardModalButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = CLOSED_STATE;
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  }

  handleSubmit = event => {
    debugger;
    event.preventDefault();

    const first = this.refs['first'].value;
    const last = this.refs['last'].value;

    if (first && last) {
      this.props.createStudent(
        this.refs['first'].value,
        this.refs['last'].value
      );

      this.setState(CLOSED_STATE);
    } else {
      this.setState({
        errMsg: 'Both first and last names must be present'
      });
    }
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleOpen}>Add Award</button>
        <Modal open={open} onClose={this.handleClose} little showCloseIcon>
          <h2>Add an Award</h2>
          { this.state.errMsg ? <p style={{color: 'red'}}> Error: {this.state.errMsg} </p> : null }
          <form onSubmit={this.handleSubmit}>
            <label>Competition</label>
            <input type="text" ref="first" />

            <label>Placement</label>
            <input type="text" ref="last" />

            <label>Date</label>
            <input type="text" ref="last" />

            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </div>
    );
  }
}
