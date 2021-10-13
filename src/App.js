import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import MainLayout from './layouts/MainLayout';
import AboutUsPage from './pages/AboutUs.page';
import AgentPage from './pages/Agent.page';
import AgentsPage from './pages/Agents.page';
import HousePage from './pages/House.page';
import HousesPage from './pages/Houses.page';
import MainPage from './pages/Main.page';

import { saveUser } from './store/actions';

import baseUrl from './endpoints';
import UserPage from './pages/User.page';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && token !== 'undefined') {
      const config = {
        method: 'get',
        url: `${baseUrl}/auto_login`,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      axios(config).then((res) => dispatch(saveUser(res.data)));
    }
  }, [dispatch]);

  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/agents" component={AgentsPage} />
        <Route exact path="/agents/:id" component={AgentPage} />
        <Route exact path="/houses" component={HousesPage} />
        <Route exact path="/houses/:id" component={HousePage} />
        <Route exact path="/users/:userName" component={UserPage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
