import React from 'react';
import { useHistory } from 'react-router'

interface IProps {
}

const PrevButton: React.FC<IProps> = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/friends');
  }

  return (
    <button
      className="outline-none focus:outline-none text-xl leading-5"
      onClick={() => onClick()}
    >
      &lt;
      {/* <img src={Next} alt="Next" width="40" height="40" /> */}
    </button>
  );
};

export default PrevButton;
