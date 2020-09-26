import React from 'react';
import Next from '@assets/images/next.png';

interface IProps {
  onClick: () => void;
}

const NextButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <button
      className="rounded-full bg-pink-600 px-5 py-5 outline-none focus:outline-none"
      onClick={() => onClick()}
    >
      <img src={Next} alt="Next" width="40" height="40" />
    </button>
  );
};

export default NextButton;
