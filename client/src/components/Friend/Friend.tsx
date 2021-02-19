import React from 'react';
import Default from '@assets/images/default.png';
import Call from '@assets/images/call.png';
interface IProps {
  email: string;
  name: string;
  selected: boolean;
  onClick: () => void;
  onClickCall: () => void;
}

const Friend: React.FC<IProps> = ({ email, name, selected, onClick, onClickCall }) => {

  return (
    <div
      key={email}
      className="flex items-center px-10 py-5 border-b-2 border-primary"
      onClick={onClick}
    >
      <img src={Default} alt={name} className="rounded-full w-12 h-12" />
      <div className="ml-10 text-lg">{name}</div>
      {selected && <img src={Call} alt="call" onClick={onClickCall} className="rounded-full w-8 h-8 absolute right-0 mr-10" />}
    </div>
  );
};

export default Friend;
