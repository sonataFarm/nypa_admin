import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import data from './_data';

class Students extends Component {
  constructor(props) {
    super(props);

    this.rows = data.rows;
    this.options = {
      sortIndicator: true,
      paginationSize: 10,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
    };
    this.selectRow = {
      mode: 'checkbox',
    };
  }

  render() {
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
              data={this.rows}
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
              <TableHeaderColumn dataField="name" dataSort>
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name" dataSort>
                Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="age" dataSort>
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
