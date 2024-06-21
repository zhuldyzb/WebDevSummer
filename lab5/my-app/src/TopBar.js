// src/TopBar.js
import React from 'react';

const TopBar = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#282c34', color: 'white' }}>
    <h1>My Store</h1>
    <button style={{ padding: '10px' }}>Checkout</button>
  </div>
);

export default TopBar;
