import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { H3 } from '../../assets/styled/typography/headings';

import Table, { TD, TH, TR } from '../../assets/styled/base/tables';

class PropertyTable extends PureComponent {
  renderTableBody() {
    const { properties } = this.props;

    return properties.map((property, index) => {

      return (
        <TR key={`${property.property}--${index}`}>
          <TD style={{fontWeight: 'bold'}}>{property.property}</TD>
          <TD>{property.type}</TD>
          <TD>{property.description}</TD>
          <TD>{property.required === true }</TD>
        </TR>
      );
    });
  }

  render() {
    return (
      <Table>
          <thead>
            <tr>
              <TH>Property</TH>
              <TH>Type</TH>
              <TH>Description</TH>
              <TH>Required</TH>
            </tr>
          </thead>
          <tbody>
            { this.renderTableBody() }
          </tbody>
        </Table>
    );
  }
}

PropertyTable.propTypes = {
  properties: PropTypes.array.isRequired
};

export default PropertyTable;
