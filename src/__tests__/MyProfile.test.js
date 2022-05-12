import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyProfile from '../pages/MyProfile';
import testStore from '../redux/configureStore';
import MissionsList from '../pages/MissionsList';

const mission = [
  {
    desc: 'Eutelsat S.A. is a European satellite operator',
    key: 'special',
    id: 1,
    name: 'defines the satellite',
    reservation: false,
  },
];

describe('testing the rendering of my profile page', () => {
  it('renders rocket and missions', () => {
    const { container } = render(
      <Provider store={testStore}>
        <MyProfile>
          <MissionsList key={mission[0].id} mission={mission[0]} />
        </MyProfile>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
