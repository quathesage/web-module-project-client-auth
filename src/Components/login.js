import React, { useState } from 'react';

const Login = (props) => {
  const [credentials, setCredentials] = useState({username:'', password:''});

  handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();

    const { token } = resp.data
    axios.get('http://localhost:9000/api/login', credentials)
      .then(resp => {
        localStorage.setItem('token', token)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return(
    <div>
      <h1>Login</h1>
      <form>
        <label>Username</label>
        <input
          type='text'
          name='username'
          onChange={handleChange}
          value={credentials.username}
        />
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          value={credentials.password}
        />
      </form>
    </div>
  )
}

export default Login;