import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      </Switch>
      <Route component={Footer} />
    </Router>
  );
}

export default App;