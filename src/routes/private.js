import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

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

  IconButton,
  Badge,

  Dialog,
  DialogTitle,
  DialogActions
} from '@material-ui/core'

import HomeScreen from '../screens/home';
import AppScreen from '../screens/app';
import AppNewScreen from '../screens/appNew';
import AccountScreen from '../screens/account';

import NotFound from '../ui/notFound';
import Footer from '../ui/footer';

class Private extends React.Component {

  state = {

  }

  signOut = e => {
    this.props.changeToPrivate(false)
  }

  render() {
    return (
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
              component={Link}
              to={`/account`}
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
          <Route path="/account" component={AccountScreen} />
          <Route path="/app-new" component={AppNewScreen} />
          <Route path="/app" component={AppScreen} />
          <Route path="/" exact component={HomeScreen} />

          <Route><NotFound /></Route>
        </Switch>

        <Footer />

        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure want to sign out ?"}</DialogTitle>

          <DialogActions>
            <Button onClick={() => this.setState({ open: false })} color="primary">
              Nope
            </Button>
            <Button variant="contained" onClick={this.signOut} color="primary" autoFocus>
              Yes, now
            </Button>
          </DialogActions>
        </Dialog>

      </Router>
    )
  }

}

export default Private;
