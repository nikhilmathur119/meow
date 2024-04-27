import axios from'axios';
import './App.css';
import React, {useState} from 'react';
const axios = require('axios');

// Replace with your API Gateway endpoint URL
const API_ENDPOINT = 'https://<your-api-gateway-endpoint>/run';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async () => {
    const payload = {
      language: "cpp",
      code,
    };
    try {
      const { data } = await axios.post(API_ENDPOINT, payload);
      setOutput(data.output);
    } catch (err) {
      console.error(err.response);
      setOutput('Error occurred. Check browser console for details.');
    }
  };
  return (
    <div className="App">
     <h1>C++ CODE COMPILER:</h1>
     <textarea rows="20" cols="75" value={code} onChange={(e)=>{setCode(e.target.value)}}>
     </textarea><br></br>
     <button onClick={handleSubmit}>Submit</button>
     <p>{output}</p>
    </div>
  );
}

export default App;
