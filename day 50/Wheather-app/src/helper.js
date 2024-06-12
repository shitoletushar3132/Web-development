function ImageSet(humidity, temp) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  if (humidity >= 30 && humidity <= 50 && temp < 15) {
    return { img: COLD_URL };
  } else if (humidity > 50 && humidity <= 60 && temp >= 15 && temp <= 30) {
    return { img: HOT_URL };
  } else if (humidity > 60 && humidity <= 100 && temp >= 15) {
    return { img: RAIN_URL };
  } else {
    return { img: INIT_URL};
  }
}

let getWeatherInfo = async (city) => {
  try {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "508e65af6d019e55904d0b72c1d2d907";
    let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    let res = await fetch(url);
    let jsonRes = await res.json();
    let result = {
      city: city.toUpperCase(),
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      feelsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    return result;
  } catch (err) {
    throw err;
  }
};
export { ImageSet, getWeatherInfo };
