import React from 'react'
import {
  Box,
  Paper,
  Button,
  Typography
} from '@material-ui/core';

class Metrics extends React.Component {

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Paper style={{textAlign: 'center', padding: '40px'}}>
          <Typography style={{marginBottom: '24px'}}>Metrics are not currently available for this app</Typography>
          <Typography variant="caption">Metrics are only available for apps running Hobby or Professional dynos.</Typography>
          <br/>
          <a href="https://google.com">Learn about metrics in the Dev Center</a>
          <br/>
          <Button variant="contained" color="primary" style={{marginTop: '32px'}}>Upgrade account now</Button>
        </Paper>
      </Box>
    )
  }

}

export default Metrics;
