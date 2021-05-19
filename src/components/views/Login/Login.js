import React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import styles from './Login.module.scss';


const classes = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


const Login = () => {

  return (
    <div className={styles.component}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={styles.textField} id="outlined-basic" label="Login" variant="outlined" />
      </form>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField className={styles.textField} id="outlined-basic" label="Password" variant="outlined" />
      </form>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
};

export default Login;
