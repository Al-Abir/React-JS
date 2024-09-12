import { useEffect, useState } from "react";
import Student from "./Student";
import './Friends.css'
export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className="box">
      <p>{friends.length}</p>
      {
        friends.map(friend => (
          <Student key={friend.id} std={friend} />
        ))
      }
    </div>
  );
}
