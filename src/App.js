import { Route, Switch } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AboutUsPage from './pages/AboutUs.page';
import MainPage from './pages/Main.page';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/about" component={AboutUsPage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
