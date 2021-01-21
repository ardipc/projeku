import React from 'react'
import {
  Box,
  Grid
} from '@material-ui/core';

import Activity from './activity'
import Access from './access'
import Resources from './resources'

class Overview extends React.Component {

  render() {
    return (
      <Box>
        <Grid container style={{flexGrow: 1}}>
          <Grid item sm={6}>
            <Resources />
            <Access />
          </Grid>

          <Grid item sm={6}>
            <Activity />
          </Grid>
        </Grid>
      </Box>
    )
  }

}

export default Overview;
