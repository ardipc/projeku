import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Box,
  Container,
  Grid,
  Paper,

  Toolbar,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction,
  Typography
} from '@material-ui/core';

import LiveTvIcon from '@material-ui/icons/LiveTv';

import { Skeleton } from '@material-ui/lab';

import { API, USER } from '../configs/api';
import { API_URL } from '../env';

class HomeScreen extends React.Component {

  state = {
    user: {},
    apps: []
  }

  componentDidMount() {
    this.setState({ user: USER })
    this.fetchApps()
  }

  fetchApps() {
    API.get(`${API_URL}/api/apps`).then(res => {
      if(res.status === 200 && res.data.error === false) {
        this.setState({ apps: res.data.result })
      }
    })
  }

  render() {

    return (
      <Box style={{marginBottom: '70px', marginTop: '64px'}}>
        <Paper variant="outlined" square style={{backgroundColor: '#f7f8fb'}}>
          <Container>
            <Toolbar style={{paddingLeft: '0px'}}>
              {
                Object.keys(this.state.user).length === 0 && <Skeleton width="30%" edge="start" style={{flexGrow: 1}} />
              }

              {
                this.state.user.hasOwnProperty('name') &&
                <>
                  <h2 edge="start" style={{flexGrow: 1}}>{this.state.user.name}</h2>
                  <Button component={Link} to={`/app-new`} variant="outlined" color="primary">Buat aplikasi</Button>
                </>
              }

            </Toolbar>
          </Container>
        </Paper>

        <Container style={{marginTop: '16px'}}>

          {
            this.state.apps.length !== 0 &&
            <TextField label="Cari aplikasi" variant="outlined" style={{width: '400px', marginBottom: '16px'}} size="small" />
          }

          <Grid container>
            <Grid item sm={12}>
              <List>

                {
                  this.state.apps.map((item, i) => (
                    <Link key={`${item}-${i}`} to={`/app/${item.name}`} style={{textDecoration: 'none'}}>
                      <Paper style={{marginBottom: '16px'}} elevation={3}>
                        <ListItem>
                          <ListItemIcon>
                            <LiveTvIcon />
                          </ListItemIcon>
                          <ListItemText primary={item.name} />
                          <ListItemSecondaryAction>
                            <Typography variant="caption" style={{marginLeft: '12px'}}>Nodejs</Typography>
                            <Typography variant="caption" style={{marginLeft: '12px'}}>Running</Typography>
                          </ListItemSecondaryAction>
                        </ListItem>
                      </Paper>
                    </Link>
                  ))
                }

              </List>
            </Grid>
          </Grid>
        </Container>

      </Box>
    );
  }

}

export default HomeScreen;
