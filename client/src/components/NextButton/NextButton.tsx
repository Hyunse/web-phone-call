import React from 'react';
import Next from '@assets/images/next.png';

const NextButton = () => {
  return (
    <button className="rounded-full bg-pink-600 px-5 py-5 outline-none focus:outline-none">
      <img src={Next} alt="Next" width="40" height="40" />
    </button>
  );
};

export default NextButton;