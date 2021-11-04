import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import HousesPage from '../pages/Houses.page';
import store from '../store/configureStore';

it('expect to render House page', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <HousesPage />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
