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

class Billing extends React.Component {

  state = {
    user: USER,
  }

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Billing Information</Typography>
          </Grid>
          <Grid item sm={8}>

          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Free Start</Typography>
          </Grid>
          <Grid item sm={8}>

          </Grid>
        </Grid>
        <Divider />
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Invoices</Typography>
          </Grid>
          <Grid item sm={8}>

          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Billing;
