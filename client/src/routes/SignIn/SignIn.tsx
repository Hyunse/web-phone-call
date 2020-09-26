import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Icon from '@assets/images/icon.png';
import NextButton from '@components/NextButton';
import { SIGN_IN } from './SiginInQueries';
import { useMutation } from '@apollo/react-hooks';

/**
 * Sign In
 */
const SignIn = () => {
  const history = useHistory();
  const [signIn, { data }] = useMutation(SIGN_IN);

  const clickSignUp = () => {
    history.push('/signUp');
  };

  const clickSignIn = () => {
    signIn({ variables: { email: 'test1@test.com', password: '1234' } });
  };

  if (data && data.SignIn && data.SignIn.token) {
    return <Redirect to="/friends" />;
  }

  return (
    <div className="container mx-auto px-10 h-screen flex flex-col items-center">
      <img src={Icon} alt="connect" className="justify-items-start my-10" />
      <div className="w-full h-full flex flex-col items-center justify-center align-middle">
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-t-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="email"
          placeholder="EMAIL"
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-b-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="password"
          placeholder="PASSWORD"
        />
      </div>
      <div className="flex flex-col items-center mb-20">
        <NextButton onClick={clickSignIn} />
        <div onClick={clickSignUp} className="cursor-pointer mt-10">
          <span className="text-sm opacity-75">DON'T HAVE AN ACCOUNT?</span>
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

export default SignIn;
