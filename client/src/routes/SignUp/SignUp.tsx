import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '@assets/images/icon.png';
import NextButton from '@components/NextButton';
import { SIGN_UP } from './SignUpQueries';
import { useMutation } from '@apollo/react-hooks';
import Alert from '@components/Alert';

/**
 * Sign Up
 */
const SignUp = () => {
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const [signUp] = useMutation(SIGN_UP, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      if (data.SignUp) {
        const { ok, token, error } = data.SignUp;

        if (ok && token) {
          localStorage.setItem('V-JWT', token);
          history.replace('/friends');
        } else {
          setAlert(error);
        }
      }
    },
  });

  const clickSignIn = () => {
    history.push('/signIn');
  };

  const showError = (msg: string) => {
    return <Alert message={msg} />;
  };

  const clickNextButton = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (
      emailRef.current &&
      nameRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current
    ) {
      const email = emailRef.current.value;
      const name = nameRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      if (password === confirmPassword) {
        // GQL SignUp
        signUp({ variables: { email, name, password } });
      } else {
        setAlert('Password mismatch');
      }
    }
  };

  return (
    <div className="container mx-auto px-10 h-screen flex flex-col items-center">
      <img src={Icon} alt="connect" className="justify-items-start my-10" />
      <div className="w-full h-full flex flex-col items-center justify-center align-middle">
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-t-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="EMAIL"
          ref={emailRef}
        />
        <input
          type="text"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="NAME"
          ref={nameRef}
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="PASSWORD"
          ref={passwordRef}
        />
        <input
          type="password"
          className="text-primary text-center text-sm placeholder-gray-300 bg-gradient-to-r from-purple-700 to-pink-600 rounded-b-lg w-full py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          placeholder="CONFIRM PASSWORD"
          ref={confirmPasswordRef}
        />
      </div>
      <div className="flex flex-col items-center mb-20">
        <NextButton onClick={clickNextButton} />
        <div onClick={clickSignIn} className="cursor-pointer mt-10">
          <span className="text-sm opacity-75">ALREADY HAVE AN ACCOUNT?</span>
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

export default SignUp;
