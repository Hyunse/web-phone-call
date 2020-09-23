import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IS_LOGGED_IN } from './AppQueries';
import { useQuery } from 'react-apollo-hooks';
import Login from '@routes/Login';

const App = () => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        <div className="font-black">{JSON.stringify(data)}</div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
