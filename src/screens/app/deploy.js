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

  Dialog,

  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,

  Paper
} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';

import StepDeploy from '../../ui/stepper'

import { API, USER } from '../../configs/api';
import { API_URL } from '../../env';

class Deploy extends React.Component {

  state = {
    isDeploy: false,
    repo: []
  }

  setDialog = (value) => {
    this.fetchRepo()
    this.setState({ isDeploy: value })
  }

  componentDidMount() {
    this.fetchRepo()
  }

  fetchRepo() {
    API.get(`${API_URL}/api/repos/${this.props.match.params.appName}`).then(res => {
      if(res.status === 200 && res.data.error === false) {
        this.setState({ repo: res.data.result })
      }
    })
  }

  render() {

    console.log('state: ', this.state);

    return (
      <Box style={{margin: '16px 0'}}>
        <Grid container style={{margin: '16px 0'}}>
          <Grid item sm={4}>
            <Typography>Deployment method</Typography>
          </Grid>
          <Grid item sm={8}>
            {
              this.state.repo.length === 0 &&
              <Button
                color="primary"
                onClick={e => this.setState({ isDeploy: true })}
                variant="contained"
                style={{marginRight: '16px'}}
                startIcon={<GitHubIcon />}
                >
                Repository
              </Button>
            }

            {
              this.state.repo.length === 1 &&
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Repository</TableCell>
                      <TableCell align="right"><Button variant="outlined" color="secondary" size="small">Disconnect</Button></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{this.state.repo[0].url}</TableCell>
                      <TableCell align="right">{this.state.repo[0].user}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            }

          </Grid>

          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={this.state.isDeploy}
            onClose={() => this.setState({ isDeploy: false })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >

            <StepDeploy appName={this.props.match.params.appName} setDialog={this.setDialog} />

          </Dialog>
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
