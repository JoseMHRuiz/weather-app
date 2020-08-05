import { FETCH_WEATHER } from './types';

export const fetchWeather = () => async (dispatch) => {
  const ids = {
    Comillas: 6360671,
    Miami: 4164138,
    Madrid: 3117732,
  };
  const fetches = await Promise.all(
    Object.values(ids).map((e) =>
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=7a1e31b95b4be4cb6345f6f7d6ee11ce`
      ).then((e) => e.json())
    )
  );
  dispatch({
    type: FETCH_WEATHER,
    payload: {
      Comillas: fetches[0],
      Miami: fetches[1],
      Madrid: fetches[2],
    },
  });
};
