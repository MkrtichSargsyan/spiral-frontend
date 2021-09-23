import { Route, Switch } from 'react-router';
import MainPage from './pages/Main.page';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
