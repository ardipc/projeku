import React from 'react'
import {
  Box,
  Paper,
  Typography,
  Button
} from '@material-ui/core';

class Resources extends React.Component {

  render() {
    return (
      <Box style={{margin: '16px 0'}}>
        <Typography variant="subtitle1">
          Free pack
          <Button variant="outlined" color="default" size="small" style={{marginLeft: '24px'}}>Upgrade account</Button>
        </Typography>
        <Paper style={{padding: '24px', marginTop: '16px'}}>
          web <code>npm start</code>
        </Paper>
      </Box>
    )
  }

}

export default Resources;
