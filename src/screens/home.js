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

import FlashOffIcon from '@material-ui/icons/FlashOff';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import { Skeleton } from '@material-ui/lab';

import axios from 'axios';

class HomeScreen extends React.Component {

  state = {
    userName: '',
    listApp: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000').then(res => {
      this.setState({
        userName: 'ardiansyah3ber',
        listApp: ["ardi-pc", "karomatul-quran", "portal-berita", "trackcar"]
      })
    })
  }

  render() {
    return (
      <Box style={{marginBottom: '70px', marginTop: '64px'}}>
        <Paper variant="outlined" square style={{backgroundColor: '#f7f8fb'}}>
          <Container>
            <Toolbar style={{paddingLeft: '0px'}}>
              {
                this.state.userName === '' && <Skeleton width="30%" edge="start" style={{flexGrow: 1}} />
              }

              {
                this.state.userName !== '' && <h2 edge="start" style={{flexGrow: 1}}>Ahmad Ardiansyah</h2>
              }

              <Button component={Link} to={`/app-new`} variant="outlined" color="primary">Buat aplikasi</Button>
            </Toolbar>
          </Container>
        </Paper>

        <Container style={{marginTop: '16px'}}>
          <TextField label="Cari aplikasi" variant="outlined" style={{width: '400px', marginBottom: '16px'}} size="small" />

          <Grid container>
            <Grid item sm={12}>
              <List>

                {
                  this.state.listApp.length === 0 && <Skeleton />
                }

                {
                  this.state.listApp.map((item) => (
                    <Link to={`/app/${item}`} style={{textDecoration: 'none'}}>
                      <Paper style={{marginBottom: '16px'}} elevation={3}>
                        <ListItem>
                          <ListItemIcon>
                            <LiveTvIcon />
                          </ListItemIcon>
                          <ListItemText primary={item} />
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
