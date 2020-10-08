import React, { useState } from 'react';
import Friend from '@components/Friend';
import { GET_CURRENT_USER } from './MainQueries';
import { useQuery } from '@apollo/client';
import Alert from '@components/Alert';

interface IProps {}

const Main: React.FC<IProps> = () => {
  const [alert, setAlert] = useState('');
  const [firendsList, setFriendsList] = useState([]);
  const { loading, data } = useQuery(GET_CURRENT_USER, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      if (data && data.GetCurrentUser) {
        const { ok, user, error } = data.GetCurrentUser;

        if (ok && user) {
          setFriendsList(user.friendsList);
        } else {
          setAlert(error);
        }
      }
    },
  });

  const showError = (msg: string) => {
    return <Alert message={msg} />;
  };

  console.log('Friends', firendsList);

  return (
    <div className="container mx-auto h-screen flex flex-col">
      <div className="flex flex-row w-full justify-center text-center my-10">
        <div className="items-center">
          <span>FREINDS</span>
        </div>
        <div className="absolute right-0 mr-4">Search</div>
      </div>
      <div>
        {loading && 'Loading...'}
        {!loading &&
          firendsList &&
          firendsList.map(({ id, email, name }) => {
            return <Friend key={id} email={email} name={name} />;
          })}
      </div>
      {alert && showError(alert)}
    </div>
  );
};

export default Main;
