import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../pages/Rockets';
import testStore from '../redux/configureStore';

const rocket = [
  {
    desc: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX',
    key: 'special',
    id: 1,
    name: 'defines the rocket',
    reservation: true,
  },
];

describe('testing the rendering of rockets', () => {
  it('', () => {
    const { container } = render(
      <Provider store={testStore}>
        <Rockets key={rocket[0]} rocket={rocket[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
