import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  {order: '123', timeOrder: '12:14', leadTime: '13 min', table: 'T1', detailsOrder: 'soup, tost, coffe', status: 'no'},
  {order: '234', timeOrder: '12:21', leadTime: '20 min', table: 'O', detailsOrder: 'main course, salat, water', status: 'no'},
  {order: '345', timeOrder: '12:22', leadTime: '21 min', table: 'T3', detailsOrder: 'soup, bread, tonic', status: 'no'},
  {order: '456', timeOrder: '12:25', leadTime: '24 min', table: 'T5', detailsOrder: 'soup, potatoes, tea', status: 'no'},
  {order: '567', timeOrder: '12:30', leadTime: '29 min', table: 'O', detailsOrder: 'potatoes fries, tost, coffe', status: 'no'},
  {order: '678', timeOrder: '12:31', leadTime: '30 min', table: 'T2', detailsOrder: 'pasta, salat, water', status: 'no'},
  {order: '789', timeOrder: '12:34', leadTime: '33 min', table: 'O', detailsOrder: 'soup, pizza, coffe', status: 'no'},
  {order: '891', timeOrder: '12:37', leadTime: '36 min', table: 'O', detailsOrder: 'pizza, tost, coffe', status: 'yes'},
];

const renderActions = status => {
  switch (status) {
    case 'no':
      return (
        <>
          <Button>realized</Button>
        </>
      );
    default:
      return (
        <>
          YES
        </>
      );
  }
};

const Kitchen = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>No order</TableCell>
          <TableCell>Table / Order</TableCell>
          <TableCell>Lead time</TableCell>
          <TableCell>Time of order</TableCell>
          <TableCell>Details order</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.order}>
            <TableCell component="th" scope="row">
              {row.order}
            </TableCell>
            <TableCell>
              {row.table}
            </TableCell>
            <TableCell>
              {row.timeOrder}
            </TableCell>
            <TableCell>
              {row.leadTime}
            </TableCell>
            <TableCell>
              {row.detailsOrder}
            </TableCell>
            <TableCell>
              {renderActions(row.status)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
