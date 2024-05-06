import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Singlehack = () => {
  const [cheats, setCheats] = useState([]);

  useEffect(() => {
    const fetchCheats = async () => {
      try {
        const response = await axios.get('/api/hot');
        setCheats(response.data.Hot);
      } catch (error) {
        console.error('Error fetching cheats:', error);
      }
    };

    fetchCheats();
  }, []);

  return (
    <div>
      {cheats.map((cheat) => (
        <div key={cheat.id} className="card">
          <h3>{cheat.hack}</h3>
          <p>Username: {cheat.username}</p>
          <p>Likes: {cheat.likes}</p>
          <p>Dislikes: {cheat.dislikes}</p>
          <p>Reports: {cheat.reports}</p>
        </div>
      ))}
    </div>
  );
};

export default Singlehack;
