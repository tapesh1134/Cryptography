import React, { useState } from 'react';
import './App.css';
import * as CryptoJS from 'crypto-js';

function App() {
  const [text, setText] = useState('');
  const [hash, setHash] = useState('');
  const [matchResult, setMatchResult] = useState('');

  const predefinedHash = 'fde868479c113722b586860f8bba9ef1edf64e1bcc1b63a2e34616c4bef43bc1'; // Replace with your actual hash

  const calculateHash = () => {
    const calculatedHash = CryptoJS.SHA256(text).toString();
    setHash(calculatedHash);

    if (calculatedHash === predefinedHash) {
      setMatchResult('Yes');
    } else {
      setMatchResult('No');
    }
  };

  return (
    <div className="App">
      <h1>Hash Matching App</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={calculateHash}>Calculate Hash</button>
      <p>Calculated Hash: {hash}</p>
      <p>Matches Predefined Hash: {matchResult}</p>
    </div>
  );
}

export default App;
