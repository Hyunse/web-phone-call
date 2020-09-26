import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '@assets/images/icon.png';
import NextButton from '@components/NextButton';

/**
 * Sign Up
 */
const SignUp = () => {
  const history = useHistory();

  const clickSignIn = () => {
    history.push('/signIn');
  };

  const clickNextButton = () => {};

  return (
    <div className="container mx-auto px-10 h-screen flex flex-col items-center">
      <img src={Icon} alt="connect" className="justify-items-start my-10" />
      <div className="w-full h-full flex flex-col items-center justify-center align-middle">
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-t-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="EMAIL"
        />
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="NAME"
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="PASSWORD"
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-b-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="CONFIRM PASSWORD"
        />
      </div>
      <div className="flex flex-col items-center mb-20">
        <NextButton onClick={clickNextButton} />
        <div onClick={clickSignIn} className="cursor-pointer mt-10">
          <span className="text-sm opacity-75">ALREADY HAVE AN ACCOUNT?</span>
        </div>
      </div>
      <footer className="absolute bottom-0 mb-1 text-xs opacity-25">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://icons8.com/icons/set/more-than"
        >
          More Than icon
        </a>{' '}
        icon by{' '}
        <a rel="noopener noreferrer" target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </footer>
    </div>
  );
};

export default SignUp;
