import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({username:'', password:''});
  const { push } = useHistory();

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    axios.post('http://localhost:9000/api/login', credentials)
      .then(resp => {
        localStorage.setItem('token', resp.data.token);
        push('/friends');
      })
      .catch(error => {
        console.error(error)
      })
  }

  return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={handleChange}
          value={credentials.username}
        />
        <br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={credentials.password}
        />
        <br/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;