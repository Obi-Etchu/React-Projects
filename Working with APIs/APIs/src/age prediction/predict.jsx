// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
import './Api.css'; 

const Api = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data);
    });
  };

  return (
    <div className="api-container">
      <h1 className="api-title">Predict Your Age</h1>
      <div className="input-container">
        <input
          className="name-input"
          placeholder="Enter name..."
          onChange={(event) => setName(event.target.value)}
        />
        <button className="fetch-button" onClick={fetchData}>
          Predict Age
        </button>
      </div>
      {age && (
        <div className="result-container">
          <h2>Name: {age?.name}</h2>
          <h2>Age: {age?.age}</h2>
          <h2>Count: {age?.count}</h2>
        </div>
      )}
    </div>
  );
};

export default Api;
