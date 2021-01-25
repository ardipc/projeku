import React from 'react'
import {
  Link
} from "react-router-dom";

import {
  Button,
  Box,
  Container,
  Paper,

  Typography,
  TextField,
  MenuItem,

  CircularProgress
} from '@material-ui/core';

import { API_URL, XMYSQL_URL } from '../env';
import axios from 'axios';

class AppNewScreen extends React.Component {

  state = {
    user: {},

    tab: 0,
    pathName: '',
    appName: '',

    app: '',
    helperApp: 'define your app to deploy',

    buildPack: '',

    loading: false
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }

    let split = this.props.location.pathname.split('/');
    this.setState({ pathName: split[1], appName: split[2] })
  }

  createApp = e => {
    this.setState({ loading: true })

    let create = {
      user_id: this.state.user.id,
      name: this.state.app,
      build: this.state.buildPack
    };
    axios.post(`${XMYSQL_URL}/apps`, create).then(res => {

      let data = {
        name: this.state.app,
        build: this.state.buildPack,
        port: (10000+res.data.insertId)
      }
      axios.post(`${API_URL}/create`, data).then(res => {
        if(res.status === 200) {
          this.setState({ loading: false })
          window.location.href = '/'
        }
      })

    })
  }

  checkName = e => {
    axios.get(`${XMYSQL_URL}/apps?_where=(name,eq,${this.state.app})`).then(res => {
      if(res.data.length === 1) {
        this.setState({ app: '', helperApp: 'name already taken' })
      }
    })
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
                onChange={e => this.setState({ app: e.target.value })}
                onBlur={this.checkName}
                value={this.state.app}
                defaultValue={this.state.app}
                helperText={this.state.helperApp}
                variant="outlined"
                style={{width: '400px'}} size="small"
              />
            </div>

            <div style={{marginBottom: '32px'}}>
              <TextField
                id="outlined-select-currency"
                label="Buildpack"
                select
                helperText="choose buildpack to deploy with your app"
                onChange={e => this.setState({ buildPack: e.target.value })}
                value={this.state.buildPack}
                defaultValue={this.state.buildPack}
                variant="outlined"
                size="small"
                style={{width: '400px', textAlign: 'left'}}
              >
                <MenuItem key={0} value={`html`}>HTML</MenuItem>
                <MenuItem key={1} value={`node`}>Node.js</MenuItem>
                <MenuItem key={3} value={`golang`}>Golang</MenuItem>
                <MenuItem key={2} value={`python`}>Python</MenuItem>
                <MenuItem key={4} value={'laravel'}>Laravel</MenuItem>
              </TextField>
            </div>

            <div>
              <Button disabled={this.state.app === ''} onClick={this.createApp} variant="contained" color="primary" style={{margin: '0px 12px'}}>
                {
                  this.state.loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Create app'
                }
              </Button>
              <Button color="default" component={Link} to="/">Cancel</Button>
            </div>

        </Container>

      </Box>
    );
  }

}

export default AppNewScreen;
