import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import AgentsPage from '../pages/Agents.page';
import store from '../store/configureStore';

it('expect to render Agent page', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <AgentsPage />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
