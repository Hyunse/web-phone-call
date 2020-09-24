import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { IS_LOGGED_IN } from './AppQueries';
// import { useQuery } from 'react-apollo-hooks';
import Login from '@routes/Login';
import Main from '@routes/Main';

const App = () => {
  // const { data } = useQuery(IS_LOGGED_IN);

  return (
    <div className="w-screen h-screen bg-primary text-primary">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
