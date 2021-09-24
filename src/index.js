import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/custom.css';
import './styles/animButton.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/configureStore';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
