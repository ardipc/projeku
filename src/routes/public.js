import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import NotFound from '../ui/notFound';

import Forgot from '../screens/forgot';
import Login from '../screens/login';
import Register from '../screens/register';

class Public extends React.Component {

  state = {

  }

  render() {
    return (
      <Router>

        <Switch>
          <Route path="/forgot" component={Forgot} />
          <Route path="/register" component={Register} />
          <Route path="/" exact component={props => <Login {...props} changeToPrivate={this.props.changeToPrivate} />} />

          <Route><NotFound /></Route>
        </Switch>

      </Router>
    )
  }

}

export default Public;
