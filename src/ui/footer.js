import React from 'react'

import {
  Toolbar,
  Typography,

  Container,
  Paper
} from '@material-ui/core'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Paper square elevation={0} style={{borderTop: '1px solid #e9e9e9'}}>
          <Container>
            <Toolbar style={{minHeight: '54px', padding: '0'}}>
              <Typography edge="start" variant="caption" color="inherit">
                projeku.com
              </Typography>
              <Typography variant="caption" color="inherit" style={{marginLeft: '16px'}}>
                Blogs
              </Typography>
              <Typography variant="caption" color="inherit" style={{flexGrow: 1, marginLeft: '16px'}}>
                Documentation
              </Typography>

              <Typography variant="caption" color="inherit" style={{marginLeft: '16px'}}>
                Term of Service
              </Typography>
              <Typography variant="caption" color="inherit" style={{marginLeft: '16px'}}>
                Privacy
              </Typography>
              <Typography variant="caption" color="inherit" style={{marginLeft: '16px'}}>
                Cookies
              </Typography>
              <Typography variant="caption" color="inherit" style={{marginLeft: '16px'}}>
                © 2021 Ahmad Ardiansyah
              </Typography>

            </Toolbar>
          </Container>
        </Paper>
      </div>
    )
  }
}

export default Footer;
