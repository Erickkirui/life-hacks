import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HotHacks = () => {
  const [cheats, setCheats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hacksPerPage] = useState(10); // Number of hacks per page

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

  // Get current hacks
  const indexOfLastHack = currentPage * hacksPerPage;
  const indexOfFirstHack = indexOfLastHack - hacksPerPage;
  const currentHacks = cheats.slice(indexOfFirstHack, indexOfLastHack);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [likedCheats, setLikedCheats] = useState(
    JSON.parse(localStorage.getItem('likedCheats')) || []
  );
  const [dislikedCheats, setDislikedCheats] = useState(
    JSON.parse(localStorage.getItem('dislikedCheats')) || []
  );
  const [reportedCheats, setReportedCheats] = useState(
    JSON.parse(localStorage.getItem('reportedCheats')) || []
  );

  const handleLike = async (cheatId) => {
    try {
      // Make sure a user can only click once
      if (!likedCheats.includes(cheatId)) {
        const updatedCheats = cheats.map((cheat) => {
          if (cheat.id === cheatId) {
            cheat.likes += 1;
          }
          return cheat;
        });
        setCheats(updatedCheats);
        setLikedCheats([...likedCheats, cheatId]);
        localStorage.setItem('likedCheats', JSON.stringify([...likedCheats, cheatId]));

        // Send PUT request to update the like count on the server
        await axios.put(`/api/updatecheat/${cheatId}`, { likes: 1 });
      }
    } catch (error) {
      console.error('Error liking cheat:', error);
    }
  };

  const handleDislike = async (cheatId) => {
    try {
      // Make sure a user can only click once
      if (!dislikedCheats.includes(cheatId)) {
        const updatedCheats = cheats.map((cheat) => {
          if (cheat.id === cheatId) {
            cheat.dislikes += 1;
          }
          return cheat;
        });
        setCheats(updatedCheats);
        setDislikedCheats([...dislikedCheats, cheatId]);
        localStorage.setItem('dislikedCheats', JSON.stringify([...dislikedCheats, cheatId]));

        // Send PUT request to update the dislike count on the server
        await axios.put(`/api/updatecheat/${cheatId}`, { dislikes: 1 });
      }
    } catch (error) {
      console.error('Error disliking cheat:', error);
    }
  };

  const handleReport = async (cheatId) => {
    try {
      // Make sure a user can only click once
      if (!reportedCheats.includes(cheatId)) {
        const updatedCheats = cheats.map((cheat) => {
          if (cheat.id === cheatId) {
            cheat.reports += 1;
          }
          return cheat;
        });
        setCheats(updatedCheats);
        setReportedCheats([...reportedCheats, cheatId]);
        localStorage.setItem('reportedCheats', JSON.stringify([...reportedCheats, cheatId]));

        // Send PUT request to update the report count on the server
        await axios.put(`/api/updatecheat/${cheatId}`, { reports: 1 });
      }
    } catch (error) {
      console.error('Error reporting cheat:', error);
    }
  };

  return (
    <div className='cheat-container'>
      {currentHacks.map((cheat) => (
        <div key={cheat.id} className="cheat-card">
            <div className='card-container'>
                <div>
                    <h3>{cheat.hack}</h3>
                    <div className='cheat-info'>
                        <h4>{cheat.username} </h4>
                        <p>Hack: {cheat.likes} | </p>
                        <p>Wack: {cheat.dislikes} | </p>
                        <p>Reports: {cheat.reports} </p>

                    </div>
                </div>
                <div className='card-actions-side'>
                    <button
                      type='button'
                      disabled={likedCheats.includes(cheat.id)}
                      onClick={() => handleLike(cheat.id)}
                      className="like-button"
                    >
                    <div className="button-content">
                      <img src="hack.jpg" alt="Like Icon" className="button-icon" />
                      Hack
                    </div>
                  </button>

                  <button
                    type='button'
                    disabled={dislikedCheats.includes(cheat.id)}
                    onClick={() => handleDislike(cheat.id)}
                    className="dislike-button"
                  >
                    <div className="button-content">
                      <img src="wack.webp" alt="Dislike Icon" className="button-icon" />
                      Wack
                    </div>
                  </button>

                    <p type='button' disabled={reportedCheats.includes(cheat.id)} onClick={() => handleReport(cheat.id)}>report</p>
                    
              </div>
            </div>
  
        </div>
      ))}

      {/* Pagination */}
      <ul className="pagination">
        {Array.from({ length: Math.ceil(cheats.length / hacksPerPage) }, (_, i) => (
          <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotHacks;
