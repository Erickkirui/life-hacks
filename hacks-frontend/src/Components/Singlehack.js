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
    <div className='cheat-container'>
      {cheats.map((cheat) => (
        <div key={cheat.id} className="cheat-card">
            <div className='card-container'>
                <div>
                    <h3>{cheat.hack}</h3>
                    <div className='cheat-info'>
                        <p>Username: {cheat.username} | </p>
                        <p>Likes: {cheat.likes} | </p>
                        <p>Dislikes: {cheat.dislikes} | </p>
                        <p>Reports: {cheat.reports} </p>

                    </div>
                </div>
                <div className='card-actions-side'>
                    <button type='submit'> Like</button>
                    <button type='submit'>Dislike</button>
                    <button type='submit'>Report</button>
                
                </div>
            </div>
  
        </div>
      ))}
    </div>
  );
};

export default Singlehack;
