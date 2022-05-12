import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsList from '../pages/MissionsList';
import testStore from '../redux/configureStore';

const mission = [
  {
    desc: 'Eutelsat S.A. is a European satellite operator',
    key: 'special',
    id: 1,
    name: 'defines the satellite',
    reservation: true,
  },
];

describe('testing the rendering of missions', () => {
  it('', () => {
    const { container } = render(
      <Provider store={testStore}>
        <MissionsList key={mission[0]} mission={mission[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
