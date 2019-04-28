import { filterForecastsNext24Hours } from './api'
// tslint:disable:object-literal-sort-keys
const apiResponse = [
  {
    dt: 1556409600,
    main: {
      temp: 12.39,
      temp_min: 11.69,
      temp_max: 12.39,
      pressure: 1009.03,
      sea_level: 1009.03,
      grnd_level: 1002.09,
      humidity: 43,
      temp_kf: 0.7,
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
      all: 79,
    },
    wind: {
      speed: 5.48,
      deg: 298.798,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-28 00:00:00',
  },
  {
    dt: 1556420400,
    main: {
      temp: 10.17,
      temp_min: 9.65,
      temp_max: 10.17,
      pressure: 1012.25,
      sea_level: 1012.25,
      grnd_level: 1005.68,
      humidity: 50,
      temp_kf: 0.53,
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
      all: 33,
    },
    wind: {
      speed: 4.52,
      deg: 307.389,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-28 03:00:00',
  },
  {
    dt: 1556431200,
    main: {
      temp: 8.87,
      temp_min: 8.52,
      temp_max: 8.87,
      pressure: 1013.76,
      sea_level: 1013.76,
      grnd_level: 1006.87,
      humidity: 53,
      temp_kf: 0.35,
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
      all: 62,
    },
    wind: {
      speed: 3.49,
      deg: 300.146,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-28 06:00:00',
  },
  {
    dt: 1556442000,
    main: {
      temp: 7.76,
      temp_min: 7.59,
      temp_max: 7.76,
      pressure: 1013.49,
      sea_level: 1013.49,
      grnd_level: 1006.32,
      humidity: 56,
      temp_kf: 0.18,
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
      all: 71,
    },
    wind: {
      speed: 1.05,
      deg: 287.299,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-28 09:00:00',
  },
  {
    dt: 1556452800,
    main: {
      temp: 8.21,
      temp_min: 8.21,
      temp_max: 8.21,
      pressure: 1013.32,
      sea_level: 1013.32,
      grnd_level: 1006.1,
      humidity: 55,
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
      all: 79,
    },
    wind: {
      speed: 1.6,
      deg: 28.633,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-28 12:00:00',
  },
  {
    dt: 1556463600,
    main: {
      temp: 6.76,
      temp_min: 6.76,
      temp_max: 6.76,
      pressure: 1014.36,
      sea_level: 1014.36,
      grnd_level: 1007.94,
      humidity: 73,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10d',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 3.26,
      deg: 8.314,
    },
    rain: {
      '3h': 3.062,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-28 15:00:00',
  },
  {
    dt: 1556474400,
    main: {
      temp: 7.47,
      temp_min: 7.47,
      temp_max: 7.47,
      pressure: 1014.88,
      sea_level: 1014.88,
      grnd_level: 1008.23,
      humidity: 74,
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
      speed: 3.41,
      deg: 1.547,
    },
    rain: {
      '3h': 0.626,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-28 18:00:00',
  },
  {
    dt: 1556485200,
    main: {
      temp: 11.59,
      temp_min: 11.59,
      temp_max: 11.59,
      pressure: 1017.26,
      sea_level: 1017.26,
      grnd_level: 1009.88,
      humidity: 58,
      temp_kf: 0,
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
      all: 50,
    },
    wind: {
      speed: 3.79,
      deg: 330.557,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-28 21:00:00',
  },
  {
    dt: 1556496000,
    main: {
      temp: 9.76,
      temp_min: 9.76,
      temp_max: 9.76,
      pressure: 1020.58,
      sea_level: 1020.58,
      grnd_level: 1012.56,
      humidity: 60,
      temp_kf: 0,
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
      all: 44,
    },
    wind: {
      speed: 3.36,
      deg: 339.877,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-29 00:00:00',
  },
  {
    dt: 1556506800,
    main: {
      temp: 7.66,
      temp_min: 7.66,
      temp_max: 7.66,
      pressure: 1024.91,
      sea_level: 1024.91,
      grnd_level: 1017.53,
      humidity: 54,
      temp_kf: 0,
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
      speed: 4.21,
      deg: 327.99,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-29 03:00:00',
  },
  {
    dt: 1556517600,
    main: {
      temp: 5.98,
      temp_min: 5.98,
      temp_max: 5.98,
      pressure: 1026.8,
      sea_level: 1026.8,
      grnd_level: 1019.45,
      humidity: 54,
      temp_kf: 0,
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
      speed: 2.29,
      deg: 348.67,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-29 06:00:00',
  },
  {
    dt: 1556528400,
    main: {
      temp: 4.85,
      temp_min: 4.85,
      temp_max: 4.85,
      pressure: 1027.88,
      sea_level: 1027.88,
      grnd_level: 1020.78,
      humidity: 57,
      temp_kf: 0,
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
      all: 16,
    },
    wind: {
      speed: 2.11,
      deg: 355.971,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-29 09:00:00',
  },
  {
    dt: 1556539200,
    main: {
      temp: 6.55,
      temp_min: 6.55,
      temp_max: 6.55,
      pressure: 1029.48,
      sea_level: 1029.48,
      grnd_level: 1022.39,
      humidity: 49,
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
      all: 23,
    },
    wind: {
      speed: 2.05,
      deg: 25.18,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-29 12:00:00',
  },
  {
    dt: 1556550000,
    main: {
      temp: 12.63,
      temp_min: 12.63,
      temp_max: 12.63,
      pressure: 1028.87,
      sea_level: 1028.87,
      grnd_level: 1022.1,
      humidity: 29,
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
      all: 64,
    },
    wind: {
      speed: 3.36,
      deg: 135.942,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-29 15:00:00',
  },
  {
    dt: 1556560800,
    main: {
      temp: 15.05,
      temp_min: 15.05,
      temp_max: 15.05,
      pressure: 1027.07,
      sea_level: 1027.07,
      grnd_level: 1020.92,
      humidity: 24,
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
      all: 64,
    },
    wind: {
      speed: 4.73,
      deg: 154.974,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-29 18:00:00',
  },
  {
    dt: 1556571600,
    main: {
      temp: 14.41,
      temp_min: 14.41,
      temp_max: 14.41,
      pressure: 1024.96,
      sea_level: 1024.96,
      grnd_level: 1019.09,
      humidity: 34,
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
      all: 64,
    },
    wind: {
      speed: 4.62,
      deg: 157.628,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-29 21:00:00',
  },
  {
    dt: 1556582400,
    main: {
      temp: 12.05,
      temp_min: 12.05,
      temp_max: 12.05,
      pressure: 1024.69,
      sea_level: 1024.69,
      grnd_level: 1018.61,
      humidity: 52,
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
      all: 81,
    },
    wind: {
      speed: 4.21,
      deg: 152.571,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-30 00:00:00',
  },
  {
    dt: 1556593200,
    main: {
      temp: 10.79,
      temp_min: 10.79,
      temp_max: 10.79,
      pressure: 1023.76,
      sea_level: 1023.76,
      grnd_level: 1016.79,
      humidity: 73,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 4.85,
      deg: 137.582,
    },
    rain: {
      '3h': 4.188,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-30 03:00:00',
  },
  {
    dt: 1556604000,
    main: {
      temp: 11.19,
      temp_min: 11.19,
      temp_max: 11.19,
      pressure: 1020.79,
      sea_level: 1020.79,
      grnd_level: 1014.18,
      humidity: 88,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
        icon: '10n',
      },
    ],
    clouds: {
      all: 100,
    },
    wind: {
      speed: 2.06,
      deg: 91.61,
    },
    rain: {
      '3h': 3.25,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-30 06:00:00',
  },
  {
    dt: 1556614800,
    main: {
      temp: 11.29,
      temp_min: 11.29,
      temp_max: 11.29,
      pressure: 1019.31,
      sea_level: 1019.31,
      grnd_level: 1012.56,
      humidity: 91,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 1.29,
      deg: 46.545,
    },
    rain: {
      '3h': 1,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-04-30 09:00:00',
  },
  {
    dt: 1556625600,
    main: {
      temp: 13.05,
      temp_min: 13.05,
      temp_max: 13.05,
      pressure: 1020.38,
      sea_level: 1020.38,
      grnd_level: 1013.69,
      humidity: 83,
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
      all: 85,
    },
    wind: {
      speed: 0.64,
      deg: 38.167,
    },
    rain: {
      '3h': 0.062,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-30 12:00:00',
  },
  {
    dt: 1556636400,
    main: {
      temp: 17.09,
      temp_min: 17.09,
      temp_max: 17.09,
      pressure: 1021.63,
      sea_level: 1021.63,
      grnd_level: 1015.05,
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
      all: 67,
    },
    wind: {
      speed: 1.5,
      deg: 322.817,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-30 15:00:00',
  },
  {
    dt: 1556647200,
    main: {
      temp: 21,
      temp_min: 21,
      temp_max: 21,
      pressure: 1022.03,
      sea_level: 1022.03,
      grnd_level: 1015.28,
      humidity: 54,
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
      all: 65,
    },
    wind: {
      speed: 2.79,
      deg: 315.348,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-30 18:00:00',
  },
  {
    dt: 1556658000,
    main: {
      temp: 22.58,
      temp_min: 22.58,
      temp_max: 22.58,
      pressure: 1022.07,
      sea_level: 1022.07,
      grnd_level: 1015.05,
      humidity: 46,
      temp_kf: 0,
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
      speed: 2.07,
      deg: 312.125,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-04-30 21:00:00',
  },
  {
    dt: 1556668800,
    main: {
      temp: 19.65,
      temp_min: 19.65,
      temp_max: 19.65,
      pressure: 1024.37,
      sea_level: 1024.37,
      grnd_level: 1017.3,
      humidity: 59,
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
      all: 92,
    },
    wind: {
      speed: 0.68,
      deg: 67.793,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-01 00:00:00',
  },
  {
    dt: 1556679600,
    main: {
      temp: 17,
      temp_min: 17,
      temp_max: 17,
      pressure: 1026.54,
      sea_level: 1026.54,
      grnd_level: 1018.87,
      humidity: 72,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 2.87,
      deg: 132.061,
    },
    rain: {
      '3h': 0.562,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-01 03:00:00',
  },
  {
    dt: 1556690400,
    main: {
      temp: 14.32,
      temp_min: 14.32,
      temp_max: 14.32,
      pressure: 1026.78,
      sea_level: 1026.78,
      grnd_level: 1020.3,
      humidity: 76,
      temp_kf: 0,
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
      all: 97,
    },
    wind: {
      speed: 4.13,
      deg: 112.288,
    },
    rain: {
      '3h': 0.688,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-01 06:00:00',
  },
  {
    dt: 1556701200,
    main: {
      temp: 11.74,
      temp_min: 11.74,
      temp_max: 11.74,
      pressure: 1026.71,
      sea_level: 1026.71,
      grnd_level: 1020.32,
      humidity: 77,
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
      all: 94,
    },
    wind: {
      speed: 4.23,
      deg: 98.282,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-01 09:00:00',
  },
  {
    dt: 1556712000,
    main: {
      temp: 11.04,
      temp_min: 11.04,
      temp_max: 11.04,
      pressure: 1028.22,
      sea_level: 1028.22,
      grnd_level: 1022.04,
      humidity: 77,
      temp_kf: 0,
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
      all: 97,
    },
    wind: {
      speed: 4.15,
      deg: 91.145,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-01 12:00:00',
  },
  {
    dt: 1556722800,
    main: {
      temp: 11.7,
      temp_min: 11.7,
      temp_max: 11.7,
      pressure: 1028.5,
      sea_level: 1028.5,
      grnd_level: 1022.34,
      humidity: 73,
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
      all: 99,
    },
    wind: {
      speed: 4.08,
      deg: 106.256,
    },
    rain: {
      '3h': 0.188,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-01 15:00:00',
  },
  {
    dt: 1556733600,
    main: {
      temp: 13.35,
      temp_min: 13.35,
      temp_max: 13.35,
      pressure: 1026.25,
      sea_level: 1026.25,
      grnd_level: 1020.06,
      humidity: 66,
      temp_kf: 0,
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
      all: 99,
    },
    wind: {
      speed: 4.54,
      deg: 104.948,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-01 18:00:00',
  },
  {
    dt: 1556744400,
    main: {
      temp: 11.45,
      temp_min: 11.45,
      temp_max: 11.45,
      pressure: 1024.94,
      sea_level: 1024.94,
      grnd_level: 1018.48,
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
      all: 100,
    },
    wind: {
      speed: 3.71,
      deg: 84.393,
    },
    rain: {
      '3h': 0.062,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-01 21:00:00',
  },
  {
    dt: 1556755200,
    main: {
      temp: 10.88,
      temp_min: 10.88,
      temp_max: 10.88,
      pressure: 1023,
      sea_level: 1023,
      grnd_level: 1016.53,
      humidity: 80,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 2.99,
      deg: 96.675,
    },
    rain: {
      '3h': 0.126,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-02 00:00:00',
  },
  {
    dt: 1556766000,
    main: {
      temp: 11.12,
      temp_min: 11.12,
      temp_max: 11.12,
      pressure: 1021.53,
      sea_level: 1021.53,
      grnd_level: 1015.7,
      humidity: 83,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 1.42,
      deg: 26.33,
    },
    rain: {
      '3h': 0.312,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-02 03:00:00',
  },
  {
    dt: 1556776800,
    main: {
      temp: 12,
      temp_min: 12,
      temp_max: 12,
      pressure: 1019.44,
      sea_level: 1019.44,
      grnd_level: 1013.13,
      humidity: 87,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 1.17,
      deg: 220.404,
    },
    rain: {
      '3h': 0.438,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-02 06:00:00',
  },
  {
    dt: 1556787600,
    main: {
      temp: 12.7,
      temp_min: 12.7,
      temp_max: 12.7,
      pressure: 1018.61,
      sea_level: 1018.61,
      grnd_level: 1012.11,
      humidity: 94,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 1.09,
      deg: 226.414,
    },
    rain: {
      '3h': 0.188,
    },
    sys: {
      pod: 'n',
    },
    dt_txt: '2019-05-02 09:00:00',
  },
  {
    dt: 1556798400,
    main: {
      temp: 14.55,
      temp_min: 14.55,
      temp_max: 14.55,
      pressure: 1019.75,
      sea_level: 1019.75,
      grnd_level: 1013.36,
      humidity: 88,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 0.38,
      deg: 156.663,
    },
    rain: {},
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-02 12:00:00',
  },
  {
    dt: 1556809200,
    main: {
      temp: 17.24,
      temp_min: 17.24,
      temp_max: 17.24,
      pressure: 1020.83,
      sea_level: 1020.83,
      grnd_level: 1014.26,
      humidity: 80,
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
      speed: 2.69,
      deg: 87.083,
    },
    rain: {
      '3h': 1.312,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-02 15:00:00',
  },
  {
    dt: 1556820000,
    main: {
      temp: 15.15,
      temp_min: 15.15,
      temp_max: 15.15,
      pressure: 1021.12,
      sea_level: 1021.12,
      grnd_level: 1014.73,
      humidity: 71,
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
      speed: 5.18,
      deg: 92.444,
    },
    rain: {
      '3h': 0.313,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-02 18:00:00',
  },
  {
    dt: 1556830800,
    main: {
      temp: 12.45,
      temp_min: 12.45,
      temp_max: 12.45,
      pressure: 1021.15,
      sea_level: 1021.15,
      grnd_level: 1014.82,
      humidity: 74,
      temp_kf: 0,
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
      all: 100,
    },
    wind: {
      speed: 4.65,
      deg: 83.635,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2019-05-02 21:00:00',
  },
]
// tslint:enable:object-literal-sort-keys
describe('api utils', () => {
  it('should filterForecastsNext24Hours', () => {
    const _Date = Date
    const mockDate = new Date(apiResponse[0].dt * 1000)
    ;(global.Date as any) = class extends Date {
      constructor() {
        super()
        return mockDate
      }
    }
    expect(filterForecastsNext24Hours(apiResponse).length).toBe(9)
    global.Date = _Date
  })
})
