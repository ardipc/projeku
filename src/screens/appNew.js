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
  Grid,
  TextField,
  MenuItem
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
          <Container style={{padding: '16px'}}>
            <Typography variant="h6">Create New App</Typography>
          </Container>
        </Paper>

        <Container style={{marginTop: '16px', textAlign: 'center', padding: '32px'}}>

            <div style={{marginBottom: '32px'}}>
              <TextField
                id="outlined-helperText"
                label="App name"
                defaultValue="your-app"
                helperText="define your app to deploy"
                variant="outlined"
                style={{width: '400px'}} size="small"
              />
            </div>

            <div style={{marginBottom: '32px'}}>
              <TextField
                id="outlined-select-currency"
                label="Region"
                select
                value={1}
                helperText="choose your location app"
                variant="outlined"
                size="small"
                style={{width: '400px', textAlign: 'left'}}
              >
                <MenuItem key={1} value={1}>Jawa Barat</MenuItem>
                <MenuItem key={3} value={3}>Jawa Tengah</MenuItem>
                <MenuItem key={2} value={2}>Jawa Timur</MenuItem>
                <MenuItem key={4} value={4}>Banten</MenuItem>
              </TextField>
            </div>

            <div style={{marginBottom: '32px'}}>
              <TextField
                id="outlined-select-currency"
                label="Buildpack"
                select
                helperText="choose buildpack to deploy with your app"
                value={1}
                variant="outlined"
                size="small"
                style={{width: '400px', textAlign: 'left'}}
              >
                <MenuItem key={1} value={1}>Node.js</MenuItem>
                <MenuItem key={3} value={3}>Golang</MenuItem>
                <MenuItem key={2} value={2}>Python</MenuItem>
                <MenuItem key={4} value={4}>Laravel</MenuItem>
              </TextField>
            </div>

            <div>
              <Button variant="contained" color="primary" style={{margin: '0px 12px'}}>Create app</Button>
              <Button color="default" component={Link} to="/">Cancel</Button>
            </div>

        </Container>

      </Box>
    );
  }

}

export default AppNewScreen;
