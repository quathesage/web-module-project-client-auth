import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h3>Friends Database</h3>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends List</Link>
          <Link to='/friends/add'>Add Friend</Link>
          <Link to='/logout'>Logout</Link>
      </header>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />

        <PrivateRoute exact path='/friends' component={FriendsList} />
        <PrivateRoute exact path='/friends/add' component={AddFriend} />
        <PrivateRoute path='/logout' component={Logout} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
