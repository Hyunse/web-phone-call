import React, { useRef, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Icon from '@assets/images/icon.png';
import NextButton from '@components/NextButton';
import { SIGN_IN } from './SignInQueries';
import { useMutation } from '@apollo/react-hooks';
import Alert from '@components/Alert';

/**
 * Sign In
 */
const SignIn = () => {
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [signIn] = useMutation(SIGN_IN, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      if (data && data.SignIn) {
        const { ok, token, error } = data.SignIn;

        if (ok && token) {
          localStorage.setItem('V-JWT', token);
          history.replace('/friends');
        } else {
          setAlert(error);
        }
      }
    },
  });

  /**
   * Move to SignUp Page
   */
  const clickSignUp = () => {
    history.push('/signUp');
  };

  /**
   * Click Sign In
   */
  const clickSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      // GQL SignIn
      signIn({ variables: { email, password } });
    }
  };

  const showError = (msg: string) => {
    return <Alert message={msg} />;
  };

  return (
    <div className="container mx-auto px-10 h-screen flex flex-col items-center">
      <img src={Icon} alt="connect" className="justify-items-start my-10" />
      <div className="w-full h-full flex flex-col items-center justify-center align-middle">
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-t-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="email"
          placeholder="EMAIL"
          ref={emailRef}
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-b-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="password"
          placeholder="PASSWORD"
          ref={passwordRef}
        />
      </div>
      <div className="flex flex-col items-center mb-20">
        <NextButton onClick={clickSignIn} />
        <div onClick={() => clickSignUp()} className="cursor-pointer mt-10">
          <span className="text-sm opacity-75">DON'T HAVE AN ACCOUNT?</span>
        </div>
      </div>
      {alert && showError(alert)}
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
