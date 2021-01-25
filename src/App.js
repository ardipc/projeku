import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
  AppBar,
  Toolbar,
  Button,
  Typography,

  Container,
  Paper,

  IconButton,
  Badge,

  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core'

import HomeScreen from './screens/home';
import AppScreen from './screens/app';
import AppNewScreen from './screens/appNew';

const Footer = () => (
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
);

class App extends React.Component {
  state = {
    user: {},
    open: false
  }

  setToDevelopment = e => {
    let user = {
      "id": 1,
      "email": "ardiansyah3ber@gmail.com",
      "pass": "f9dea888a7e90ca02a4c52e6654bf3f2",
      "name": "Ahmad Ardiansyah",
      "phone": "082334093822",
      "avatar": null,
      "created": "2021-01-22T07:02:17.000Z"
    };
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeDevelopment = e => {
    localStorage.clear();
    window.location.reload();
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }
  }

  render() {
    return (
      <div id="App" style={{flexGrow: 1}}>
        <Router>

          <AppBar position="fixed">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" style={{marginRight: '8px'}}>
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" style={{flexGrow: 1}}>
                <Link to={`/`} style={{textDecoration: 'none', color: 'white'}}>
                  PROJEKU
                </Link>
              </Typography>

              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={this.setToDevelopment}
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="sign out"
                aria-haspopup="true"
                color="inherit"
                onClick={() => this.setState({ open: true })}
              >
                <ExitToAppIcon />
              </IconButton>

            </Toolbar>
          </AppBar>

          <Switch>
            <Route path="/app-new" component={AppNewScreen} />
            <Route path="/app" component={AppScreen} />
            <Route path="/" exact component={HomeScreen} />
          </Switch>

          <Footer />

          <Dialog
            open={this.state.open}
            onClose={() => this.setState({ open: false })}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure want to sign out ?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.setState({ open: false })} color="primary">
                Nope
              </Button>
              <Button variant="outlined" onClick={this.removeDevelopment} color="primary" autoFocus>
                Yes, now
              </Button>
            </DialogActions>
          </Dialog>

        </Router>
      </div>
    );
  }
}

export default App;
