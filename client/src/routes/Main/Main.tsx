import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Friend from '@components/Friend';
import { GET_CURRENT_USER } from './MainQueries';
import { useQuery } from '@apollo/client';
import Alert from '@components/Alert';
import Search from '@assets/images/search.png';

interface IProps {}

const Main: React.FC<IProps> = () => {
  const [alert, setAlert] = useState({ message: '', type: '' });
  const [firendsList, setFriendsList] = useState([]);
  const [selected, setSelected] = useState(-1);
  const { loading } = useQuery(GET_CURRENT_USER, {
    onError: (err) => console.log(err),
    onCompleted: (data) => {
      if (data && data.GetCurrentUser) {
        const { ok, user, error } = data.GetCurrentUser;

        if (ok && user) {
          setFriendsList(user.friendsList);
        } else {
          setAlert({ message: error, type: 'error' });
        }
      }
    },
  });

  const selectFriend = (id: number) => {
    setSelected(selected !== id ? id : -1);
  };

  const showAlert = () => {
    return <Alert message={alert.message} type={alert.type} />;
  };

  return (
    <div className="container mx-auto h-screen flex flex-col">
      <div className="flex flex-row w-full justify-center text-center my-10">
        <div className="items-center">
          <span>FREINDS</span>
        </div>
        <div className="absolute right-0 mr-4 w-8">
          <Link to="/friends/search">
            <img src={Search} alt="Search" />
          </Link>
        </div>
      </div>
      <div>
        {!loading &&
          firendsList &&
          firendsList.map(({ id, email, name }) => {
            return (
              <Friend
                key={id}
                email={email}
                name={name}
                selected={selected === id ? true : false}
                onClick={() => selectFriend(id)}
              />
            );
          })}
      </div>
      {alert.type && showAlert()}
    </div>
  );
};

export default Main;
