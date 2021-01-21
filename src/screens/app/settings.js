import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  FormControlLabel,
  Switch
} from '@material-ui/core';

class Settings extends React.Component {

  state = {
    appName: this.props.match.params.appName
  }

  checkAppName = e => {
    console.log('change', e.target.value)
    this.setState({ appName: e.target.value })
  }

  saveAppName = e => {
    console.log(e.target.value)
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
            <Button variant="outlined" color="secondary" style={{marginLeft: '12px'}}>Delete app</Button>
          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Settings;
