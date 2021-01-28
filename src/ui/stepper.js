import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import {
  CircularProgress
} from '@material-ui/core'

import { API, USER } from '../configs/api';
import { API_URL } from '../env';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  content: {
    marginBottom: theme.spacing(2)
  },
  form: {
    marginBottom: theme.spacing(3),
  }
}));

function getSteps() {
  return ['Repository', 'Account', 'Overview'];
}

export default function HorizontalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const [loading, setLoading] = React.useState(false);
  const [url, setUrl] = React.useState('');
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleRepo = () => {
    let form = {
      app: props.appName,
      url,
      user,
      pass
    }

    setLoading(true);
    API.post(`${API_URL}/api/repos`, form).then(res => {
      if(res.status === 200 && res.data.error === false) {
        setLoading(false);
        props.setDialog(false);
      }
    })

  }

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Container className={classes.content}>
        {activeStep === steps.length ? (
          <div>
            <div className={classes.form}>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
            </div>

            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>

            {
              activeStep === 0 &&
              <div className={classes.form}>
                <Typography variant="subtitle2" className={classes.instructions}>URL Repository</Typography>
                <TextField value={url} onChange={e => setUrl(e.target.value)} fullWidth={true} variant="outlined" size="small" />
              </div>
            }

            {
              activeStep === 1 &&
              <div className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <Typography variant="subtitle2" className={classes.instructions}>Username</Typography>
                    <TextField value={user} onChange={e => setUser(e.target.value)} fullWidth={true} variant="outlined" size="small" />
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="subtitle2" className={classes.instructions}>Password</Typography>
                    <TextField value={pass} onChange={e => setPass(e.target.value)} fullWidth={true} type="password" variant="outlined" size="small" />
                  </Grid>
                </Grid>
              </div>
            }

            {
              activeStep === 2 &&
              <div className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle2" className={classes.instructions}>URL Repository</Typography>
                    <TextField value={url} fullWidth={true} variant="outlined" size="small" />
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="subtitle2" className={classes.instructions}>Username</Typography>
                    <TextField value={user} fullWidth={true} variant="outlined" size="small" />
                  </Grid>
                  <Grid item sm={6}>
                    <Typography variant="subtitle2" className={classes.instructions}>Password</Typography>
                    <TextField value={pass} type="password" fullWidth={true} variant="outlined" size="small" />
                  </Grid>
                </Grid>
              </div>
            }

            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={activeStep === 2 ? handleRepo: handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? (loading ? <CircularProgress style={{color: 'white'}} size={20} /> : 'Finish') : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
