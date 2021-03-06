import React from 'react';
import { Table } from 'reactstrap';

export const DataTable = (props) => {
  return (
    <Table size="sm"hover>
      <thead>
        <tr>
          <th>Current Temp Reading: Normal Range (40 - 50) </th>
          <th>Current Conc Reading: Normal Range (12 - 17)</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">40</th>
          <td>15</td>
          
          
        </tr>
        <tr>
          <th scope="row">41</th>
          <td>13</td>
          
          
        </tr>
        <tr>
          <th scope="row">45</th>
          <td>14</td>
          
          
        </tr>
      </tbody>
    </Table>
  );
}

