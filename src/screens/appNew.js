import React from 'react'
import {
  Switch,
  Route,
  NavLink,
  Link,
  LinkProps
} from "react-router-dom";

import {
  Button,
  Box,
  Container,
  Paper,

  Toolbar,
  AppBar,
  Typography,
  Grid
} from '@material-ui/core';

import Overview from './app/overview';
import Resources from './app/resources';
import Deploy from './app/deploy';
import Metrics from './app/metrics';
import Activity from './app/activity';
import Access from './app/access';
import Settings from './app/settings';

import Tabs from '@material-ui/core/Tabs';
import { default as Tab, TabProps } from '@material-ui/core/Tab';

class AppNewScreen extends React.Component {

  state = {
    tab: 0,
    pathName: '',
    appName: ''
  }

  componentDidMount() {
    let split = this.props.location.pathname.split('/');
    this.setState({ pathName: split[1], appName: split[2] })
  }

  render() {

    return (
      <Box style={{marginBottom: '70px', marginTop: '64px'}}>
        <Paper variant="outlined" square style={{backgroundColor: '#f7f8fb', textAlign: 'center'}}>
          <Container>
            <h2>Create New App</h2>
          </Container>
        </Paper>

        <Container>

          <Paper>
            <h1>App</h1>
          </Paper>

        </Container>

      </Box>
    );
  }

}

export default AppNewScreen;
