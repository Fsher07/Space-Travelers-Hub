import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../pages/MyProfile';
import testStore from '../redux/configureStore';
import Rockets from '../pages/Rockets';
import MissionsList from '../pages/MissionsList';

const mission = [
  {
    desc: 'Eutelsat S.A. is a European satellite operator',
    key: 'special',
    id: 1,
    name: 'defines the satellite',
    reservation: true,
  },
];

const rocket = [
  {
    desc: 'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX',
    key: 'very special',
    id: 2,
    name: 'defines the rocket',
    reservation: true,
  },
];

describe('testing the rendering of my profile page', () => {
  it('renders rocket and missions', () => {
    const { container } = render(
      <Provider store={testStore}>
        <MyProfile />
          <Rockets key={rocket[0].id} rocket={rocket[0]} />
          <MissionsList key={mission[0].id} mission={mission[0]} />
      </Provider>,
    )
  })
});

