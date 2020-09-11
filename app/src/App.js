import React from 'react';
import MenuBar from './Header.js';
import BusinessCard from './BizCard.js';

function App() {
  return (
    <div>
      <div>
        <MenuBar>
        </MenuBar>
      </div>
      <h1>
        Support 💼 Send 💸 Save 💰
      </h1>
      <h2>
        Help your favorite small business. Get money back on each purchase.
      </h2>
      <div>
        <BusinessCard>
        </BusinessCard>
      </div>
    </div>
  );
}

export default App;
