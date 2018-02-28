import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import CreateAwardModalButton from './CreateAwardModalButton'

class AwardList extends React.Component {
  render() {
    const rows = this.props.awards;

    const editButton = (cell, row) => (
      <div>
        <Link to={`/awards/${cell}`}><i className="icon-note"></i></Link>
      </div>
    );

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-trophy"></i>Awards
          </CardHeader>
          <CardBody>
            <CreateAwardModalButton
            createAward={this.props.createAward}
          />
            <BootstrapTable
              data={rows}
              version='4'
              striped
              hover
              pagination
              search
              options={this.options}
            >
              <TableHeaderColumn dataField="id" isKey hidden />
              <TableHeaderColumn dataField="date" dataSort>
                Date
              </TableHeaderColumn>
              <TableHeaderColumn dataField="competition" dataSort>
                Competition
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Placement" dataSort>
                Placement
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
