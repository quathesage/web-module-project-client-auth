import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriend';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
        <h3>Friends Database</h3>
          <Link>Login</Link>
          <Link>Friends List</Link>
          <Link>Add Friend</Link>
          <Link>Logout</Link>
      </header>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' componet={Login} />
        <Route exact path='/friends' component={FriendsList} />
        <Route exact path='/friends/add' component={AddFriend} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
