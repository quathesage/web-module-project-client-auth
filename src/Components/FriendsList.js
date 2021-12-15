import React, { useState, useEffect} from 'react';
import axios from 'axios';

const FriendsList = (props) => {
  const [ list, setList ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/friends', {
      headers: {
        authorization:localStorage.getItem('token')
      }
    })
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  })

  return(
    <div>
      <h1>Friends List</h1>
      {
        list.map(friend => {
          return <h3 key={friend.id}>{friend.name}--{friend.email}</h3>
        })
      }
    </div>
  )
}

export default FriendsList;
