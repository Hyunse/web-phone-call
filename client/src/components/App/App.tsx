import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { IS_LOGGED_IN } from './AppQueries';
// import { useQuery } from 'react-apollo-hooks';
import SignUp from '@routes/SignUp';
import SignIn from '@routes/SignIn';
import Main from '@routes/Main';

const App = () => {
  // const { data } = useQuery(IS_LOGGED_IN);

  return (
    <div className="w-screen h-screen bg-primary text-primary">
      <BrowserRouter>
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
