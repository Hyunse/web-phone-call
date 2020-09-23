import React from 'react';
import { IS_LOGGED_IN } from './AppQueries';
import { useQuery } from 'react-apollo-hooks';

const App = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <React.Fragment>
      <div className="font-black">{JSON.stringify(data)}</div>
    </React.Fragment>
  );
};

export default App;
