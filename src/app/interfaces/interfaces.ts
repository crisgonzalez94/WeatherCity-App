export interface WeatherDate{
  data: [
    {
      app_temp: number;
      aqi: number;
      city_name: string;
      clouds: number;
      country_code: string;
      datetime: string;
      dewpt: number;
      dhi: number;
      dni: number;
      elev_angle: number;
      ghi: number;
      h_angle: number;
      lat: number;
      lon: number;
      ob_time: string;
      pod: string;
      precip: number;
      pres: number;
      rh: number;
      slp: number;
      snow: number;
      solar_rad: number;
      state_code: string;
      station: string;
      sunrise: string;
      sunset: string;
      temp: number;
      timezone: string;
      ts: number;
      uv: number;
      vis: number;
      weather: [
        {
          icon: string;
          code: number;
          description: string
        }
      ];
      wind_cdir: string;
      wind_cdir_full: string;
      wind_dir: number;
      wind_spd: number;
    }

  ],
  count:number

}


/*=================================================================*/
export interface WeatherWeekDate {
  data: Datum[];
  city_name: string;
  lon: string;
  timezone: string;
  lat: string;
  country_code: string;
  state_code: string;
}

interface Datum {
  moonrise_ts: number;
  wind_cdir: string;
  rh: number;
  pres: number;
  high_temp: number;
  sunset_ts: number;
  ozone: number;
  moon_phase: number;
  wind_gust_spd: number;
  snow_depth: number;
  clouds: number;
  ts: number;
  sunrise_ts: number;
  app_min_temp: number;
  wind_spd: number;
  pop: number;
  wind_cdir_full: string;
  slp: number;
  moon_phase_lunation: number;
  valid_date: string;
  app_max_temp: number;
  vis: number;
  dewpt: number;
  snow: number;
  uv: number;
  weather: Weather;
  wind_dir: number;
  max_dhi?: any;
  clouds_hi: number;
  precip: number;
  low_temp: number;
  max_temp: number;
  moonset_ts: number;
  datetime: string;
  temp: number;
  min_temp: number;
  clouds_mid: number;
  clouds_low: number;
}

interface Weather {
  icon: string;
  code: number;
  description: string;
}
