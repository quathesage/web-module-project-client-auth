import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Login from './login';

const Logout = () => {
  const { push } = useHistory()

  useEffect(() => {
    axios.post('http://localhost:9000/api/logout', {}, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      push('/login')
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return(
    <div></div>
  )
}

export default Logout;