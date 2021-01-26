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

import { API, USER } from '../configs/api';
import { API_URL } from '../env';

class AppNewScreen extends React.Component {

  state = {
    user: USER,

    buildpacks: [],

    tab: 0,
    pathName: '',
    appName: '',

    app: '',
    helperApp: '',

    buildPack: '',

    loading: false
  }

  componentDidMount() {
    let split = this.props.location.pathname.split('/');
    this.setState({ pathName: split[1], appName: split[2] })

    this.fetchBuildPack()
  }

  fetchBuildPack() {
    API.get(`${API_URL}/api/buildpacks`).then(res => {
      if(res.status === 200 && res.data.error === false) {
        this.setState({ buildpacks: res.data.result })
      }
    })
  }

  createApp = e => {
    this.setState({ loading: true })

    let create = {
      user_id: this.state.user.id,
      name: this.state.app,
      build: this.state.buildPack
    };
    API.post(`${API_URL}/api/apps`, create).then(res => {

      this.setState({ loading: false })
      this.props.history.push('/')

    })
  }

  checkName = e => {
    this.setState({ helperApp: 'rechecking...'})
    API.get(`${API_URL}/api/apps/check?name=${this.state.app}`).then(res => {
      if(res.data.error) {
        this.setState({ app: '', helperApp: 'name already taken.' })
      }
      else {
        this.setState({ helperApp: 'app ready.'})
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
                autoFocus={this.state.app === '' && this.state.helperApp}
                color={this.state.app === '' && this.state.helperApp ? 'secondary' : 'default'}
                id="outlined-helperText"
                label="App name"
                onChange={e => this.setState({ app: e.target.value })}
                onBlur={this.checkName}
                value={this.state.app}
                defaultValue={this.state.app}
                helperText={this.state.helperApp ? this.state.helperApp : 'define your app to deploy.'}
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
                {
                  this.state.buildpacks.map((item,i) => (

                    <MenuItem key={`${item.id}-${i}`} value={item.id}>{item.name}</MenuItem>
                  ))
                }
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
