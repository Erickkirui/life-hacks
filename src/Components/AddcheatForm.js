import React, { useState } from 'react';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function AddCheatForm() {
  const [hack, setHack] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the API request to add the cheat
      await axios.post('/api/addcheat', { hack, username });
      
      // Set success message
      setMessage(`Your clever idea has been spread like party confetti, making mischief everywhere! 🎉🎊`);
      
      // Clear form fields after successful submission
      setHack('');
      setUsername('');
    } catch (error) {
      // Set error message
      setMessage(`You did something wrong! But hey, the site works perfectly. Maybe try a longer name?`);
    }
  };

  return (
    <div className='post-form-container'>
      <p><ChevronLeft /> <Link to="/">Back</Link></p>
      <h1>What's that one hack in life that helps daily?</h1>
      <p> Make sure you follow all rules and regulations before posting a hack. <span>No login required</span></p>
      <div className='widom'>
        {message && <p>{message}</p>}
      </div>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="hack">Hack:</label><br />
        <textarea id="hack" name="hack" value={hack} onChange={(e) => setHack(e.target.value)} /><br />
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCheatForm;
