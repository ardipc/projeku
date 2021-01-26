import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import axios from 'axios';
import { API_URL } from '../env';

import {
  CircularProgress,
} from '@material-ui/core';

import {
  Alert
} from '@material-ui/lab'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        projeku.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const setToTrue = () => {
    setOpen(true);
  };

  const setToFalse = () => {
    setOpen(false);
  };

  const SignIn = e => {
    e.preventDefault()
    let form = {
      email: email,
      pass: pass
    };
    setLoading(true)
    axios.post(`${API_URL}/api/users/login`, form).then(res => {
      if(res.status === 200 && res.data.error === false) {
        setLoading(false)
        props.changeToPrivate(true);
        setMessage('Redirecting...')
        localStorage.setItem('users', JSON.stringify(res.data.result))
      }
      else {
        setLoading(false)
        setMessage(res.data.result)
      }
    })
  }

  const SendLinkUpdate = e => {
    e.preventDefault()
    setLoading(true)
    axios.post(`${API_URL}/api/users/forgot`, {email: email}).then(res => {
      if(res.status === 200 && res.data.error === false) {
        setMessage('Please check your inbox.')
        setLoading(false)
        setEmail('')
      }
    })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      {
        !open &&
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" style={{marginBottom: '24px'}}>PROJEKU</Typography>
            <Typography component="h1" variant="h5">
              {message === '' ? 'Sign in' : <Alert severity="info">{message}</Alert>}
            </Typography>
            <form className={classes.form} onSubmit={SignIn}>
              <TextField onChange={e => setEmail(e.target.value)} value={email} variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
              <TextField onChange={e => setPass(e.target.value)} value={pass} variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
              <Button onClick={SignIn} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {
                  loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Sign In'
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link style={{cursor: 'pointer'}} onClick={setToTrue} variant="body2"> Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={NavLink} to={`/register`} variant="body2"> {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      }

      {
        open &&
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" style={{marginBottom: '24px'}}>PROJEKU</Typography>
            <Typography component="h1" variant="h5">
            {message === '' ? 'Forgot password' : <Alert severity="info">{message}</Alert>}
            </Typography>
            <form className={classes.form} onSubmit={SendLinkUpdate}>
              <TextField
                onChange={e => setEmail(e.target.value)}
                value={email}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={SendLinkUpdate}
                className={classes.submit}
              >
                {
                  loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Send'
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link style={{cursor: 'pointer'}} onClick={setToFalse} variant="body2">
                    Sign in
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={NavLink} to={`/register`} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      }

    </Grid>
  );
}
