import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../components/Loader';

it('expect to render loading components', () => {
  const result = renderer.create(<Loader />).toJSON;
  expect(result).toMatchSnapshot();
});
