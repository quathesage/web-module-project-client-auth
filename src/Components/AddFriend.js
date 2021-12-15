import React, {useState} from 'react';
import axios from 'axios';

const AddFriend = (props) => {
  const [ data, setData ] = useState({name: '', email: ''});

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault();

    axios.post('http://localhost:9000/api/friends', data, {
      headers: {
        authorization:localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

  return(
    <div>
      <h1>Add A Friend</h1>

      <form onSubmit={submit}>
        <label>Friend Name</label>
        <input
          type='text'
          name='name'
          value={data.name}
          onChange={handleChange}
        />
        <br/>

        <label>Friend Email</label>
        <input
          type='email'
          name='email'
          value={data.name}
          onChange={handleChange}
        />
        <br/>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddFriend;