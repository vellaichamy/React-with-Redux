import React from 'react';
import './style.css';

function getButtonText() {
  return 'Click on me!';
}

// function Converting() {
const Converting = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
    </div>
  );
};

export default Converting;
