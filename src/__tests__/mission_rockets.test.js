import { missionsReducer } from '../redux/missions';
import { rocketsReducer } from '../redux/rockets';

describe('testing getting rockets from api', () => {
  it('should return initial state', () => {
    expect(rocketsReducer([], {})).toEqual([]);
    expect(missionsReducer([], {})).toEqual([]);
  });

  it('should return all rockets', () => {
    const rockets = [
      {
        id: 1,
        active: false,
        stages: 2,
        boosters: 0,
        cost_per_launch: 6700000,
        success_rate_pct: 40,
        first_flight: '2006-03-24',
        country: 'Republic of the Marshall Islands',
        company: 'SpaceX',
        height: { meters: 22.25, feet: 73 },
        diameter: { meters: 1.68, feet: 5.5 },
        mass: { kg: 30146, lb: 66460 },
        payload_weights: [{
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 450,
          lb: 992,
        }],
        first_stage: {
          reusable: false,
          engines: 1,
          fuel_amount_tons: 44.3,
          burn_time_sec: 169,
          thrust_sea_level: { kN: 420, lbf: 94000 },
          thrust_vacuum: { kN: 480, lbf: 110000 },
        },
        second_stage: {
          reusable: false,
          engines: 1,
          fuel_amount_tons: 3.38,
          burn_time_sec: 378,
          thrust: { kN: 31, lbf: 7000 },
          payloads: {
            option_1: 'composite fairing',
            composite_fairing: {
              height: { meters: 3.5, feet: 11.5 },
              diameter: { meters: 1.5, feet: 4.9 },
            },
          },
        },
        engines: {
          number: 1,
          type: 'merlin',
          version: '1C',
          layout: 'single',
          isp: { sea_level: 267, vacuum: 304 },
          engine_loss_max: 0,
          propellant_1: 'liquid oxygen',
          propellant_2: 'RP-1 kerosene',
          thrust_sea_level: { kN: 420, lbf: 94000 },
          thrust_vacuum: { kN: 480, lbf: 110000 },
          thrust_to_weight: 96,
        },
        landing_legs: { number: 0, material: null },
        flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
        wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocket_id: 'falcon1',
        rocket_name: 'Falcon 1',
        rocket_type: 'rocket',
      },
    ];
    const action = {
      type: 'GET_ROCKETS',
      payload: rockets,
    };
    expect(rocketsReducer(undefined, action)).toEqual([
      {
        description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        flickr_images: 'https://imgur.com/DaCfMsj.jpg',
        id: 1,
        rocket_name: 'Falcon 1',
      },
    ]);
  });

  it('should return all missions', () => {
    const missions = [
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E0',
        manufacturers: ['Orbital ATK'],
        payload_ids: ['Thaicom 6', 'Thaicom 8'],
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      },
    ];
    const missionAction = {
      type: 'space-travelers-hub/missions/GET_MISSIONS',
      payload: missions,
    };
    expect(missionsReducer(undefined, missionAction)).toEqual([
      {
        id: '9D1B7E0',
        name: 'Thaicom',
        description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
      },
    ]);
  });
});
