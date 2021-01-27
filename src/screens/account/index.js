import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,

  TextField,
  Avatar
} from '@material-ui/core';

import { API, USER } from '../../configs/api';
import { API_URL } from '../../env';

class Account extends React.Component {

  state = {
    user: USER,
  }

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Avatar</Typography>
            <Typography variant="caption">Set your profile picture.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Avatar style={{width: '120px', height: '120px'}} alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />

            <Button variant="contained" color="primary" style={{marginLeft: '16px', marginTop: '16px'}}>Change</Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Profile</Typography>
            <Typography variant="caption">Your email address is your identity on <b>Projeku</b> <br/>and is used to log in.</Typography>
          </Grid>
          <Grid item sm={8}>
            <div>
              <TextField value={this.state.user.email} style={{width: '320px'}} label="Email Address" variant="outlined" size="small" />
              <Button variant="contained" color="primary" style={{marginLeft: '16px'}}>Save</Button>
            </div>
            <div style={{marginTop: '32px'}}>
              <TextField value={this.state.user.name} style={{width: '320px'}} label="Name (Optional)" variant="outlined" size="small" />
            </div>
            <div style={{marginTop: '16px'}}>
              <TextField value={this.state.user.phone} style={{width: '320px'}} label="Phone (Optional)" variant="outlined" size="small" />
            </div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Password</Typography>
            <Typography variant="caption">Changing your password & relogin.</Typography>
          </Grid>
          <Grid item sm={8}>
            <div>
              <TextField style={{width: '400px'}} label="Current Password" variant="outlined" size="small" />
            </div>
            <div style={{marginTop: '16px'}}>
              <TextField style={{width: '400px'}} label="Enter New Password" helperText="Password must be 8 or more characters." variant="outlined" size="small" />
            </div>
            <div style={{marginTop: '16px'}}>
              <TextField style={{width: '400px'}} label="Confirm New Password" variant="outlined" size="small" />
            </div>
            <div style={{marginTop: '16px'}}>
              <Button variant="contained" color="primary">Update Password</Button>
            </div>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Token</Typography>
            <Typography variant="caption">It is your token now for access.</Typography>
          </Grid>
          <Grid item sm={8}>
            <TextField
              style={{width: '720px'}}
              placeholder="Generated token"
              multiline
              rows={3}
              rowsMax={5}
              value={this.state.user.token}
              />
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography style={{color: 'red'}}>Close Account</Typography>
            <Typography variant="caption">You must delete all apps on this account first.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Button variant="contained" color="secondary">Close Account</Button>
          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Account;
