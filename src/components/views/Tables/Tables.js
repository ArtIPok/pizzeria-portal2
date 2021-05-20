import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DatePicker from '../../../utils/DatePicker';


const demoContent = [
  {hour: '12:00 - 12:30', stateT1: 'free', stateT2: 'free', stateT3: 'O123'},
  {hour: '12:30 - 13:00', stateT1: 'free', stateT2: 'O234', stateT3: 'O123'},
  {hour: '13:00 - 13:30', stateT1: 'free', stateT2: 'free', stateT3: 'free'},
  {hour: '13:30 - 14:00', stateT1: 'E123', stateT2: 'free', stateT3: 'O456'},
  {hour: '14:00 - 14:30', stateT1: 'E123', stateT2: 'O345', stateT3: 'O456'},
  {hour: '14:30 - 15:00', stateT1: 'free', stateT2: 'O345', stateT3: 'O456'},
  {hour: '15:00 - 15:30', stateT1: 'O567', stateT2: 'E234', stateT3: 'free'},
  {hour: '15:30 - 16:00', stateT1: 'O567', stateT2: 'E234', stateT3: 'E345'},
  {hour: '16:00 - 16:30', stateT1: 'O567', stateT2: 'E234', stateT3: 'E345'},
];

class Tables extends React.Component {
  render(){
    return (
      <div>
        <DatePicker />
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hour</TableCell>
                <TableCell>Table no 1</TableCell>
                <TableCell>Table no 2</TableCell>
                <TableCell>Table no 3</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {demoContent.map(row => (
                <TableRow key={row.hour}>
                  <TableCell component="th" scope="row">
                    {row.hour}
                  </TableCell>
                  <TableCell>
                    {row.stateT1 && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.stateT1}`}>
                        {row.stateT1}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.stateT2 && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.stateT2}`}>
                        {row.stateT2}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {row.stateT3 && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.stateT3}`}>
                        {row.stateT3}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Tables;
