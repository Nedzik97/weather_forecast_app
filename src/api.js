const baseUrl = "http://api.weatherapi.com/v1";
const accountKey = `8b2fa3b1e1ca45aeb7e83803231505`;

export const fetchForecastWeather = (location) => {
  return fetch(
    `${baseUrl}/forecast.json?key=${accountKey}&q=${location}&aqi=no&days=7`
  ).then((res) => res.json());
};
