export default function DisplayData({info}) {

  return (
    <>
      <div>Temperature = {info.temp}&deg;c</div>
      <div>Humidity = {info.humidity}</div>
      <div>Min Temp = {info.tempMin}&deg;c</div>
      <div>Max Temp = {info.tempMax}&deg;c</div>
      <div>
        The weather can be described as <b>{info.weather}</b> and feels like{" "}
        {info.feelsLike}&deg;c
      </div>
    </>
  );
}
