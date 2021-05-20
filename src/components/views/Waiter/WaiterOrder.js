import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styles from './Waiter.module.scss';


const demoContent = [
  {id: '1', menu: 'menu1', options: 'salad, tomato, water', order: '234', total: '25$'},
  {id: '2', menu: 'menu2', options: 'tea, sugar, tonic', order: '123', total: '35$'},
  {id: '3', menu: 'menu3', options: 'bread, pepper, water', order: '345', total: '45$'},
];

const WaiterOrder = () => (
  <Paper className={styles.component}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Menu</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Total price:</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.menu}
            </TableCell>
            <TableCell>
              {row.options}
            </TableCell>
            <TableCell>
              {row.order}
            </TableCell>
            <TableCell>
              {row.total}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default WaiterOrder;
