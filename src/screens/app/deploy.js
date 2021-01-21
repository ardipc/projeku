import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  FormControl,

  TextField,
  MenuItem
} from '@material-ui/core';

class Deploy extends React.Component {

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Deployment method</Typography>
          </Grid>
          <Grid item sm={8}>
            <Button variant="contained" style={{marginRight: '16px'}}>Github</Button>
            <Button variant="contained" style={{marginRight: '16px'}}>Bitbucket</Button>
            <Button variant="contained" style={{marginRight: '16px'}}>Gitlab</Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Automatic deploy</Typography>
            <Typography variant="caption">Enables a chosen branch to be automatically deployed to this app.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="caption">Every push to master will deploy a new version of this app. Deploys happen automatically: be sure that this branch in GitHub is always in a deployable state and any tests have passed before you push.</Typography>
            <br/>
            <Button variant="outlined" color="primary" style={{marginTop: '12px'}}>Show instructions</Button>
            <Button variant="outlined" color="primary" style={{marginTop: '12px', marginLeft: '12px'}}>Disable deploy automation</Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Manual deploy</Typography>
            <Typography variant="caption">Deploy the current state of a branch to this app.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography>Deploy an app on branch</Typography>
            <Typography variant="caption">This will deploy the current state of the branch you specify below.</Typography>

            <Typography variant="subtitle2" style={{marginTop: '12px', marginBottom: '12px'}}>Choose a branch to deploy</Typography>
            <FormControl variant="outlined" size="small" style={{width: '320px'}}>
              <TextField
                id="outlined-select-currency"
                label="Branch"
                select
                value={0}
                variant="outlined"
                size="small"
              >
                <MenuItem key={1} value={1}>master</MenuItem>
                <MenuItem key={2} value={2}>staging</MenuItem>
                <MenuItem key={3} value={3}>development</MenuItem>
                <MenuItem key={4} value={4}>ardipc</MenuItem>
              </TextField>
            </FormControl>
            <Button variant="contained" color="primary" style={{marginLeft: '16px'}}>Deploy</Button>
          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Deploy;
