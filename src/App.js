import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';

import Footer from './components/footer/index.js';
import Header from './components/header/index.js';
import Home from './pages/home.js';
import Signup from './pages/signup.js'

function App() {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Signup} />
        <Redirect to='/' />
      </Switch>
      <Route component={Footer} />
    </Router>
  );
}

export default App;