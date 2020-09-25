import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '@assets/images/icon.png';

interface IProps {}

const Main: React.FC<IProps> = () => {
  const history = useHistory();

  const clickSignUp = () => {
    history.push('/signUp');
  };

  const clickSignIn = () => {
    history.push('/signIn');
  };

  return (
    <div className="container mx-auto h-screen flex flex-col items-center">
      <img src={Icon} alt="connect" className="justify-items-start my-10" />
      <div className="flex flex-col h-full justify-end items-center pb-20">
        <div className="mb-10">
          <button
            className="font-bold text-lg rounded-full bg-gradient-to-r from-purple-700 to-pink-600 py-16 px-10 outline-none focus:outline-none"
            onClick={clickSignUp}
          >
            SIGN UP
          </button>
        </div>
        <div onClick={clickSignIn} className={"cursor-pointer"}>
          <span className="opacity-75">ALREADY HAVE ACCOUNT?</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
