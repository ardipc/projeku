import React from 'react'
import {
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import {
  Button,
  Box,
  Container,
  Paper,

  Toolbar,
} from '@material-ui/core';

import Overview from './app/overview';
import Resources from './app/resources';
import Deploy from './app/deploy';
import Metrics from './app/metrics';
import Activity from './app/activity';
import Access from './app/access';
import Settings from './app/settings';

import Tabs from '@material-ui/core/Tabs';
import { default as Tab } from '@material-ui/core/Tab';

class AppScreen extends React.Component {

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
        <Paper variant="outlined" square style={{backgroundColor: '#f7f8fb'}}>
          <Container>
            <Toolbar style={{padding: '0'}}>
              <h2 edge="start" style={{flexGrow: 1}}>{this.state.appName}</h2>
              <Button variant="outlined" color="primary" style={{marginLeft: '12px'}}>Open app</Button>
              <Button variant="outlined" color="primary" style={{marginLeft: '12px'}}>View logs</Button>
            </Toolbar>
          </Container>
        </Paper>

        <div color="default" elevation={0} style={{borderBottom: '1px solid #e9e9e9'}}>
          <Container>
            <Tabs value={this.state.tab} onChange={(e,v) => this.setState({ tab: v})}>
              <Tab value={0} label="Overview" component={NavLink} to={`/app/${this.state.appName}`} />
              <Tab value={1} label="Resources" component={NavLink} to={`/app/${this.state.appName}/resources`} />
              <Tab value={2} label="Deploy" component={NavLink} to={`/app/${this.state.appName}/deploy`} />
              <Tab value={3} label="Metrics" component={NavLink} to={`/app/${this.state.appName}/metrics`} />
              <Tab value={4} label="Activity" component={NavLink} to={`/app/${this.state.appName}/activity`} />
              <Tab value={5} label="Access" component={NavLink} to={`/app/${this.state.appName}/access`} />
              <Tab value={6} label="Settings" component={NavLink} to={`/app/${this.state.appName}/settings`} />
            </Tabs>
          </Container>
        </div>

        <Container>

          <Switch>
            <Route path="/app/:appName/settings" component={Settings} />
            <Route path="/app/:appName/access" component={Access} />
            <Route path="/app/:appName/activity" component={Activity} />
            <Route path="/app/:appName/metrics" component={Metrics} />
            <Route path="/app/:appName/deploy" component={Deploy} />
            <Route path="/app/:appName/resources" component={Resources} />
            <Route path="/app/:appName" exact component={Overview} />
          </Switch>

        </Container>

      </Box>
    );
  }

}

export default AppScreen;
