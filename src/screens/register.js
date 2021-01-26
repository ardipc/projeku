import React from 'react';
import {
  NavLink
} from 'react-router-dom';

import axios from 'axios';
import { API_URL } from '../env';

import {
  CircularProgress
} from '@material-ui/core';

import {
Alert
} from '@material-ui/lab'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [firstName, setFirstName] = React.useState('');
  const [secondName, setSecondName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');

  const SignUp = e => {
    e.preventDefault()
    let form = {
      email: email,
      pass: pass,
      name: `${firstName} ${secondName}`
    }
    setLoading(true)
    axios.post(`${API_URL}/api/users/register`, form).then(res => {
      if(res.status === 200 && res.data.error === false) {
        setMessage('Please check your inbox.')
        setLoading(false)
        setFirstName('')
        setSecondName('')
        setEmail('')
        setPass('')
      }
      else {
        setMessage(res.data.result)
      }
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" style={{marginBottom: '24px'}}>PROJEKU</Typography>

        <Typography component="h1" variant="h5">
          {message === '' ? 'Sign up' : <Alert severity="success">{message}</Alert>}
        </Typography>
        <form className={classes.form} onSubmit={SignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => setSecondName(e.target.value)}
                value={secondName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setEmail(e.target.value)}
                value={email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setPass(e.target.value)}
                value={pass}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            onClick={SignUp}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {
              loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Sign Up'
            }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={NavLink} to={`/`} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
