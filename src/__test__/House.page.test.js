import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import HousePage from '../pages/House.page';
import store from '../store/configureStore';

it('expect to render House page', () => {
  const result = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <HousePage />
      </BrowserRouter>
    </Provider>,
  ).toJSON;
  expect(result).toMatchSnapshot();
});
