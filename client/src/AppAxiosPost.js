import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState('');

  const sendDataToServer = async () => {
    try {
      const response = await axios.post('/api/postData', {
        data: inputData,
      });

      setResponse(response.data.message);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h1>React App Sending Data to Node.js Server</h1>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="Enter data to send"
      />
      <button onClick={sendDataToServer}>Send Data</button>
      <div>
        <p>Server Response:</p>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
