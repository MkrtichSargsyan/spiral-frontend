import { Route, Switch } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AboutUsPage from './pages/AboutUs.page';
import AgentPage from './pages/Agent.page';
import AgentsPage from './pages/Agents.page';
import HousePage from './pages/House.page';
import HousesPage from './pages/Houses.page';
import MainPage from './pages/Main.page';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutUsPage} />
        <Route exact path="/agents" component={AgentsPage} />
        <Route exact path="/agents/:id" component={AgentPage} />
        <Route exact path="/houses" component={HousesPage} />
        <Route exact path="/houses/:id" component={HousePage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
