import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Switch,
  CircularProgress
} from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios'
import { API_URL } from '../../env'

class Settings extends React.Component {

  state = {
    appName: this.props.match.params.appName,

    loading: false,
    isDelete: false,
    deleteApp: ''
  }

  checkAppName = e => {
    console.log('change', e.target.value)
    this.setState({ appName: e.target.value })
  }

  saveAppName = e => {
    console.log(e.target.value)
  }

  deleteApp = e => {
    this.setState({ loading: true })
    axios.delete(`${API_URL}/delete/${this.state.deleteApp}`).then(res => {
      if(res.status === 200) {
        this.setState({ loading: false, deleteApp: '', isDelete: false })
        window.location.href = '/'
      }
    })
  }

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>App information</Typography>
          </Grid>
          <Grid item sm={8}>
            <TextField onChange={this.checkAppName} onBlur={this.saveAppName} label="Nama aplikasi" value={this.state.appName} variant="outlined" style={{width: '400px', marginBottom: '16px'}} size="small" />
            <table>
              <tr>
                <td style={{width: '100px'}}>
                  <Typography variant="subtitle2">Size app</Typography>
                </td>
                <td>
                  <Typography variant="body2">10 MiB of 50MiB</Typography>
                </td>
              </tr>
              <tr>
                <td style={{width: '100px'}}>
                  <Typography variant="subtitle2">Framework</Typography>
                </td>
                <td>
                  <Typography variant="body2">Node.js</Typography>
                </td>
              </tr>
              <tr>
                <td style={{width: '100px'}}>
                  <Typography variant="subtitle2">Region</Typography>
                </td>
                <td>
                  <Typography variant="body2">Indonesia</Typography>
                </td>
              </tr>
            </table>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Maintenance mode</Typography>
            <Typography variant="caption">If you need to take your app offline you can <br/>turn on maintenance mode.</Typography>
          </Grid>
          <Grid item sm={8}>
            <FormControlLabel
              control={
                <Switch
                  checked={false}
                  name="maintenance"
                  color="primary"
                />
              }
              label="Maintenance mode is off"
            />
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Delete App</Typography>
            <Typography variant="caption">Deleting your app and its add-ons is irreversible.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Button variant="outlined" onClick={() => this.setState({ isDelete: true })} color="secondary" style={{marginLeft: '12px'}}>Delete app</Button>
          </Grid>

          <Dialog open={this.state.isDelete} onClose={() => this.setState({ isDelete: false })} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
              Enter your app's name <b>{this.state.appName}</b> below to confirm you want to permanently delete it:
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={this.state.deleteApp}
                onChange={e => this.setState({ deleteApp: e.target.value })}
                label="App name"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.setState({ isDelete: false })} color="primary">
                Cancel
              </Button>
              <Button disabled={this.state.appName !== this.state.deleteApp} onClick={this.deleteApp} color="secondary" variant="contained">
                {
                  this.state.loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Delete'
                }
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>

      </Box>
    )
  }

}

export default Settings;
