import React, { useState } from 'react';
import axios from 'axios';

function AddCheatForm() {
  const [hack, setHack] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/addcheat', { hack, username });
      setMessage(`Cheat added successfully! Cheat ID: ${response.data.cheat_id}`);
    } catch (error) {
      setMessage(`Error adding cheat: ${error.response.data.message}`);
    }
  };

  return (
    <div className='post-form-container'>
      <h1>What that One hack in life that helps daily?</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="hack">Hack :</label><br />
        <textarea id="hack" name="hack" value={hack} onChange={(e) => setHack(e.target.value)} /><br />
        <label htmlFor="username">Username:</label><br />
        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddCheatForm;
