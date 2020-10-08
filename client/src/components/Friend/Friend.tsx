import React from 'react';
import Default from '@assets/images/default.png';

interface IProps {
  email: string;
  name: string;
}

const Friend: React.FC<IProps> = ({ email, name }) => {
  return (
    <div key={email} className="flex items-center px-10">
      <img src={Default} alt={name} className="rounded-full w-12 h-12" />
      <div className="ml-10">{name}</div>
    </div>
  );
};

export default Friend;
