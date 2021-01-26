import React from 'react'
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  FormControl,

  TextField,
  MenuItem,
  Avatar
} from '@material-ui/core';

import { API, USER } from '../../configs/api';
import { API_URL } from '../../env';

class Applications extends React.Component {

  state = {
    user: USER,
  }

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Third-party Services</Typography>
            <Typography variant="caption">Grant Projeku access to external accounts <br/> for additional functionality.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Button variant="contained" color="primary">Add Services</Button>
          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Authorizations</Typography>
            <Typography variant="caption">Authorizations you have created for <br/> interacting with the Heroku API.</Typography>
          </Grid>
          <Grid item sm={8}>
            <Button variant="contained" color="primary">Create Authorization</Button>
          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Applications;
