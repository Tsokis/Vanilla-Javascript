function getWeather(woeid) {
const targetUrl = `https://www.metaweather.com/api/location/${woeid}/`;
const proxieUrl = 'https://cors-anywhere.herokuapp.com/';


fetch(proxieUrl + targetUrl)
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    console.log(data)
    const today = data.consolidated_weather[0];
    const parent = data.parent;
    //test
    console.log(`City: ${data.title} Country:  ${parent.title} with min temperature ${today.min_temp} and max temperature ${today.max_temp} Celsius , Weather is ${today.weather_state_name}`);
})
.catch(error => console.log(error));
}
getWeather(44418);
getWeather(946738);