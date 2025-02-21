import React from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <h1>Coming Soon!</h1>
      <p>We are working hard to bring something amazing. Stay tuned!</p>
      <div className="email-signup">
        <input type="email" placeholder="Enter your email" />
        <button>Notify Me</button>
      </div>
    </div>
  );
};

export default ComingSoon;
