// tslint:disable:object-literal-sort-keys
import { IState } from '../types'

const stub: IState = {
  forecast: {
    error: false,
    errorMsg: '',
    loading: false,
    locations: [
      {
        displayName: 'London',
        list: [
          {
            dt: 1556388000,
            main: {
              temp: 10.47,
              temp_min: 10.47,
              temp_max: 10.65,
              pressure: 1013.27,
              sea_level: 1013.27,
              grnd_level: 1008.68,
              humidity: 54,
              temp_kf: -0.18,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 70,
            },
            wind: {
              speed: 7.44,
              deg: 283.11,
            },
            rain: {
              '3h': 0.125,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-27 18:00:00',
          },
          {
            dt: 1556398800,
            main: {
              temp: 8.22,
              temp_min: 8.22,
              temp_max: 8.35,
              pressure: 1015.38,
              sea_level: 1015.38,
              grnd_level: 1010.79,
              humidity: 61,
              temp_kf: -0.13,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02n',
              },
            ],
            clouds: {
              all: 15,
            },
            wind: {
              speed: 6.77,
              deg: 275.721,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-27 21:00:00',
          },
          {
            dt: 1556409600,
            main: {
              temp: 7.34,
              temp_min: 7.34,
              temp_max: 7.43,
              pressure: 1015.87,
              sea_level: 1015.87,
              grnd_level: 1011.44,
              humidity: 61,
              temp_kf: -0.09,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n',
              },
            ],
            clouds: {
              all: 34,
            },
            wind: {
              speed: 7.09,
              deg: 280.565,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 00:00:00',
          },
          {
            dt: 1556420400,
            main: {
              temp: 6.93,
              temp_min: 6.93,
              temp_max: 6.98,
              pressure: 1016.03,
              sea_level: 1016.03,
              grnd_level: 1011.49,
              humidity: 70,
              temp_kf: -0.04,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10n',
              },
            ],
            clouds: {
              all: 62,
            },
            wind: {
              speed: 7.26,
              deg: 287.505,
            },
            rain: {
              '3h': 0.375,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 03:00:00',
          },
          {
            dt: 1556431200,
            main: {
              temp: 7.33,
              temp_min: 7.33,
              temp_max: 7.33,
              pressure: 1017.19,
              sea_level: 1017.19,
              grnd_level: 1012.52,
              humidity: 75,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 76,
            },
            wind: {
              speed: 6.86,
              deg: 299.594,
            },
            rain: {
              '3h': 0.187,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 06:00:00',
          },
          {
            dt: 1556442000,
            main: {
              temp: 10.19,
              temp_min: 10.19,
              temp_max: 10.19,
              pressure: 1018.77,
              sea_level: 1018.77,
              grnd_level: 1013.93,
              humidity: 69,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 66,
            },
            wind: {
              speed: 6.3,
              deg: 312.898,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 09:00:00',
          },
          {
            dt: 1556452800,
            main: {
              temp: 11.99,
              temp_min: 11.99,
              temp_max: 11.99,
              pressure: 1019.32,
              sea_level: 1019.32,
              grnd_level: 1014.62,
              humidity: 63,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 82,
            },
            wind: {
              speed: 6.01,
              deg: 319.666,
            },
            rain: {
              '3h': 0.312,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 12:00:00',
          },
          {
            dt: 1556463600,
            main: {
              temp: 13.04,
              temp_min: 13.04,
              temp_max: 13.04,
              pressure: 1019.55,
              sea_level: 1019.55,
              grnd_level: 1014.93,
              humidity: 59,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 87,
            },
            wind: {
              speed: 4.91,
              deg: 335.292,
            },
            rain: {
              '3h': 0.312,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 15:00:00',
          },
        ],
      },
      {
        displayName: 'Madrid',
        list: [
          {
            dt: 1556388000,
            main: {
              temp: 20.17,
              temp_min: 20.17,
              temp_max: 20.45,
              pressure: 1022.44,
              sea_level: 1022.44,
              grnd_level: 937.7,
              humidity: 31,
              temp_kf: -0.28,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.62,
              deg: 162.856,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-27 18:00:00',
          },
          {
            dt: 1556398800,
            main: {
              temp: 15.44,
              temp_min: 15.44,
              temp_max: 15.65,
              pressure: 1024.47,
              sea_level: 1024.47,
              grnd_level: 939.05,
              humidity: 45,
              temp_kf: -0.21,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 1.06,
              deg: 319.481,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-27 21:00:00',
          },
          {
            dt: 1556409600,
            main: {
              temp: 13.95,
              temp_min: 13.95,
              temp_max: 14.09,
              pressure: 1024.74,
              sea_level: 1024.74,
              grnd_level: 939.1,
              humidity: 56,
              temp_kf: -0.14,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01n',
              },
            ],
            clouds: {
              all: 0,
            },
            wind: {
              speed: 2.98,
              deg: 31.129,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 00:00:00',
          },
          {
            dt: 1556420400,
            main: {
              temp: 12.41,
              temp_min: 12.41,
              temp_max: 12.48,
              pressure: 1023.97,
              sea_level: 1023.97,
              grnd_level: 938,
              humidity: 65,
              temp_kf: -0.07,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02n',
              },
            ],
            clouds: {
              all: 19,
            },
            wind: {
              speed: 2.74,
              deg: 32.563,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 03:00:00',
          },
          {
            dt: 1556431200,
            main: {
              temp: 12.03,
              temp_min: 12.03,
              temp_max: 12.03,
              pressure: 1023.83,
              sea_level: 1023.83,
              grnd_level: 937.61,
              humidity: 64,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 10,
            },
            wind: {
              speed: 2.58,
              deg: 38.885,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 06:00:00',
          },
          {
            dt: 1556442000,
            main: {
              temp: 17.09,
              temp_min: 17.09,
              temp_max: 17.09,
              pressure: 1022.6,
              sea_level: 1022.6,
              grnd_level: 937.66,
              humidity: 47,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 2,
            },
            wind: {
              speed: 2.82,
              deg: 79.555,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 09:00:00',
          },
          {
            dt: 1556452800,
            main: {
              temp: 21.39,
              temp_min: 21.39,
              temp_max: 21.39,
              pressure: 1020.42,
              sea_level: 1020.42,
              grnd_level: 936.28,
              humidity: 34,
              temp_kf: 0,
            },
            weather: [
              {
                id: 800,
                main: 'Clear',
                description: 'clear sky',
                icon: '01d',
              },
            ],
            clouds: {
              all: 4,
            },
            wind: {
              speed: 2.1,
              deg: 104.116,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 12:00:00',
          },
          {
            dt: 1556463600,
            main: {
              temp: 23.54,
              temp_min: 23.54,
              temp_max: 23.54,
              pressure: 1017.9,
              sea_level: 1017.9,
              grnd_level: 934.14,
              humidity: 28,
              temp_kf: 0,
            },
            weather: [
              {
                id: 801,
                main: 'Clouds',
                description: 'few clouds',
                icon: '02d',
              },
            ],
            clouds: {
              all: 17,
            },
            wind: {
              speed: 1.7,
              deg: 118.017,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 15:00:00',
          },
        ],
      },
      {
        displayName: 'New York',
        list: [
          {
            dt: 1556388000,
            main: {
              temp: 14.39,
              temp_min: 12.85,
              temp_max: 14.39,
              pressure: 1003.42,
              sea_level: 1003.42,
              grnd_level: 996.49,
              humidity: 32,
              temp_kf: 1.54,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03d',
              },
            ],
            clouds: {
              all: 42,
            },
            wind: {
              speed: 7.75,
              deg: 279.557,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-27 18:00:00',
          },
          {
            dt: 1556398800,
            main: {
              temp: 14.21,
              temp_min: 13.05,
              temp_max: 14.21,
              pressure: 1005.41,
              sea_level: 1005.41,
              grnd_level: 998.5,
              humidity: 37,
              temp_kf: 1.16,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04d',
              },
            ],
            clouds: {
              all: 85,
            },
            wind: {
              speed: 6.35,
              deg: 291.28,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-27 21:00:00',
          },
          {
            dt: 1556409600,
            main: {
              temp: 12.53,
              temp_min: 11.75,
              temp_max: 12.53,
              pressure: 1008.7,
              sea_level: 1008.7,
              grnd_level: 1001.79,
              humidity: 45,
              temp_kf: 0.77,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 72,
            },
            wind: {
              speed: 5.23,
              deg: 305.27,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 00:00:00',
          },
          {
            dt: 1556420400,
            main: {
              temp: 10.06,
              temp_min: 9.68,
              temp_max: 10.06,
              pressure: 1012,
              sea_level: 1012,
              grnd_level: 1005.36,
              humidity: 51,
              temp_kf: 0.39,
            },
            weather: [
              {
                id: 802,
                main: 'Clouds',
                description: 'scattered clouds',
                icon: '03n',
              },
            ],
            clouds: {
              all: 39,
            },
            wind: {
              speed: 4.3,
              deg: 309.686,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 03:00:00',
          },
          {
            dt: 1556431200,
            main: {
              temp: 8.33,
              temp_min: 8.33,
              temp_max: 8.33,
              pressure: 1013.28,
              sea_level: 1013.28,
              grnd_level: 1006.38,
              humidity: 54,
              temp_kf: 0,
            },
            weather: [
              {
                id: 803,
                main: 'Clouds',
                description: 'broken clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 64,
            },
            wind: {
              speed: 3.71,
              deg: 300.309,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 06:00:00',
          },
          {
            dt: 1556442000,
            main: {
              temp: 7.99,
              temp_min: 7.99,
              temp_max: 7.99,
              pressure: 1013.09,
              sea_level: 1013.09,
              grnd_level: 1005.82,
              humidity: 53,
              temp_kf: 0,
            },
            weather: [
              {
                id: 804,
                main: 'Clouds',
                description: 'overcast clouds',
                icon: '04n',
              },
            ],
            clouds: {
              all: 99,
            },
            wind: {
              speed: 1.31,
              deg: 304.504,
            },
            sys: {
              pod: 'n',
            },
            dt_txt: '2019-04-28 09:00:00',
          },
          {
            dt: 1556452800,
            main: {
              temp: 8.19,
              temp_min: 8.19,
              temp_max: 8.19,
              pressure: 1013.23,
              sea_level: 1013.23,
              grnd_level: 1006.59,
              humidity: 56,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 83,
            },
            wind: {
              speed: 1.92,
              deg: 348.919,
            },
            rain: {
              '3h': 0.562,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 12:00:00',
          },
          {
            dt: 1556463600,
            main: {
              temp: 7.34,
              temp_min: 7.34,
              temp_max: 7.34,
              pressure: 1013.11,
              sea_level: 1013.11,
              grnd_level: 1005.57,
              humidity: 67,
              temp_kf: 0,
            },
            weather: [
              {
                id: 500,
                main: 'Rain',
                description: 'light rain',
                icon: '10d',
              },
            ],
            clouds: {
              all: 100,
            },
            wind: {
              speed: 2.57,
              deg: 75.964,
            },
            rain: {
              '3h': 1.688,
            },
            sys: {
              pod: 'd',
            },
            dt_txt: '2019-04-28 15:00:00',
          },
        ],
      },
    ],
  },
}

export default stub
