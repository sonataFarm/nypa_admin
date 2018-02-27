import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import $ from 'jquery';

class InsertModal extends React.Component {

  handleSaveBtnClick = () => {
    debugger;
    const j = $;
    this.props.createStudent(this.refs.firstName, this.refs.lastName);
    $('#input-modal').modal('toggle');
  }

  render() {
    const {
      onModalClose,
      onSave,
      columns,
      validateState,
      ignoreEditable
    } = this.props;

    const columnNames = [
      "First Name",
      "Last Name"
    ];

    return (
      <div
        id="input-modal"
        className='modal-content react-bs-table-insert-modal'
        style={{top: '100px'}}>
        <div className="modal-body">
          {
            columns.filter(column => (
              columnNames.indexOf(column.name) !== -1
            )).map((column, i) => {
              const {
                editable,
                format,
                field,
                name,
                hiddenOnInsert
              } = column;

              if (hiddenOnInsert) {
                // when you want same auto generate value
                // and not allow edit, for example ID field
                return null;
              }

              const error = validateState[field] ?
                (<span className='help-block bg-danger'>{ validateState[field] }</span>) :
                null;
              return (
                <div className='form-group' key={ field }>
                  <label>{ name + ' '}  </label>

                  <input ref={ field } type='text' defaultValue={ '' } />
                  { error }
                </div>
              );
            })
          }
        </div>
        <div className="modal-footer react-bs-table-inser-modal-footer">
          <button className='btn btn-default btn-secondary' onClick={ onModalClose }>Close</button>
          <button className='btn btn-primary' onClick={ () => this.handleSaveBtnClick(columns, onSave) }>Save</button>
        </div>
      </div>
    );
  }
};

class Students extends Component {
  constructor(props) {
    super(props);

    this.options = {
      insertModal: this.insertModal,
      sortIndicator: true,
      paginationSize: 10,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
    };

    this.selectRow = {
      mode: 'checkbox',
    };
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  insertModal = (onModalClose, onSave, columns, validateState, ignoreEditable) => {
    const options = {
      onModalClose, onSave, columns, validateState, ignoreEditable
    };

    return <InsertModal
      createStudent={ this.props.createStudent }
      {...options}
    />;
  }

  render() {
    const rows = this.props.students;

    const editButton = (cell, row) => (
      <div>
        <Link to={`/students/${cell}`}><i className="icon-note"></i></Link>
      </div>
    );

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-people"></i>Students
          </CardHeader>
          <CardBody>
            <BootstrapTable
              data={rows}
              version='4'
              striped
              hover
              pagination
              search
              options={this.options}
              insertRow
              deleteRow
              selectRow={this.selectRow}
            >
              <TableHeaderColumn dataField="id" isKey hidden />
              <TableHeaderColumn dataField="firstName" dataSort>
                First Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="lastName" dataSort>
                Last Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="active" dataSort>
                Active
              </TableHeaderColumn>
              <TableHeaderColumn dataField="id" dataFormat={editButton}>
                Edit
              </TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Students;
