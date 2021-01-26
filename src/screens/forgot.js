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

  const query = new URLSearchParams(props.location.search);

  const [enc, setEnc] = React.useState(query.get('q'));
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const [pass, setPass] = React.useState('');
  const [passConfirm, setPassConfirm] = React.useState('');

  const UpdatePassword = e => {
    e.preventDefault()
    let form = {
      email: enc,
      pass: pass
    };
    setLoading(true)
    axios.post(`${API_URL}/api/users/password`, form).then(res => {
      if(res.status === 200 && res.data.error === false) {
        setLoading(false)
        setMessage('Password successfully updated.')
      }
    })
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h4" style={{marginBottom: '24px'}}>PROJEKU</Typography>
            <Typography component="h1" variant="h5">
              {message === '' ? 'Set new password' : <Alert severity="info">{message}</Alert>}
            </Typography>
            <form className={classes.form} onSubmit={UpdatePassword}>
              <TextField autoFocus onChange={e => setPass(e.target.value)} value={pass} variant="outlined" margin="normal" required fullWidth name="password" label="New Password" type="password" />
              <TextField onChange={e => setPassConfirm(e.target.value)} value={passConfirm} variant="outlined" margin="normal" required fullWidth name="passwordConfirm" label="Confirm Password" type="password" />
              <Button disabled={(pass !== passConfirm) || pass === ''} onClick={UpdatePassword} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                {
                  loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Update Password'
                }
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link component={NavLink} to={`/`} style={{cursor: 'pointer'}} variant="body2"> Sign In
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

    </Grid>
  );
}
