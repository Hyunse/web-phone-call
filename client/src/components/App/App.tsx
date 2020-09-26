import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { GET_ALL_USER } from './AppQueries';
// import { useQuery } from '@apollo/react-hooks';
import SignUp from '@routes/SignUp';
import SignIn from '@routes/SignIn';
import Home from '@routes/Home';
import Main from '@routes/Main';

const App = () => {
  // const { data } = useQuery(GET_ALL_USER);

  // console.log(data);
  return (
    <div className="w-screen h-screen bg-primary text-primary">
      <BrowserRouter>
        <Switch>
          <Route path="/signUp" component={SignUp} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/friends" component={Main} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
