import React from 'react'
import { NavLink, Link, Switch, Route } from 'react-router-dom'
import {
  Button,
  Box,
  Container,
  Grid,
  Paper,

  Toolbar,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography,

  Tabs,
  Tab
} from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

import Account from './account/index';
import Applications from './account/applications';
import Billing from './account/billing';

import { API, USER } from '../configs/api';
import { API_URL } from '../env';

class AccountScreen extends React.Component {

  state = {
    tab: 0,
  }

  render() {

    return (
      <Box style={{marginBottom: '70px', marginTop: '64px'}}>
        <Paper variant="outlined" square style={{backgroundColor: '#f7f8fb'}}>
          <Container>
            <Toolbar style={{paddingLeft: '0px'}}>
              <Typography variant="h6">Manage Account</Typography>
            </Toolbar>
          </Container>
        </Paper>

        <div color="default" elevation={0} style={{borderBottom: '1px solid #e9e9e9'}}>
          <Container>
            <Tabs value={this.state.tab} onChange={(e,v) => this.setState({ tab: v })}>
              <Tab value={0} label="Account" component={NavLink} to={`/account`} />
              <Tab value={1} label="Applications" component={NavLink} to={`/account/applications`} />
              <Tab value={2} label="Billing" component={NavLink} to={`/account/billing`} />
            </Tabs>
          </Container>
        </div>

        <Container>

          <Switch>
            <Route path="/account/billing" component={Billing} />
            <Route path="/account/applications" component={Applications} />
            <Route path="/account" exact component={Account} />
          </Switch>

        </Container>

      </Box>
    );
  }

}

export default AccountScreen;
