import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    // secondary: { main: '#11cb5f' },
  },
});


const App = () => (
  <BrowserRouter basename={'/'}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
