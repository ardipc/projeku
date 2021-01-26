import './App.css';
import React from 'react';

import Public from './routes/public'
import Private from './routes/private'

class App extends React.Component {

  state = {
    isLogin: localStorage.getItem('isLogin') && localStorage.getItem('users'),
    open: false
  }

  changeToPrivate = (value) => {
    if(value) {
      localStorage.setItem('isLogin', value);
    } else {
      localStorage.clear();
    }
    window.location.reload()
  }

  render() {
    const Main = ({isPrivate}) => isPrivate ? <Private changeToPrivate={this.changeToPrivate} /> : <Public changeToPrivate={this.changeToPrivate} />;

    return (
      <div id="App" style={{flexGrow: 1}}>

        <Main isPrivate={this.state.isLogin} />

      </div>
    );
  }
}

export default App;
