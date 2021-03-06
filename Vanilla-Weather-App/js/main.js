function getWeather(woeid) {
const targetUrl = `https://www.metaweather.com/api/location/${woeid}/`;
const proxieUrl = 'https://cors-anywhere.herokuapp.com/';
const weatherHtml = document.querySelector('.Weather');
const forecast = document.querySelector('.Forecast');
let hide = document.querySelector('.container');
hide.style.display = 'none';

fetch(proxieUrl + targetUrl)
.then(result => {
    console.log(result);
    return result.json();
})
.then(data => {
    //test 
    console.log(data)
    const today = data.consolidated_weather[0];
    const nextDay = data.consolidated_weather[1];
    const after2Days = data.consolidated_weather[2];
    const after3Days = data.consolidated_weather[3];
    const after4Days = data.consolidated_weather[4];
    const after5Days = data.consolidated_weather[5];
    const parent = data.parent;    
    let d = new Date(); 
    dd = d.toDateString();    
    //test
    console.log(`City: ${data.title} Country:  ${parent.title} with min temperature ${today.min_temp} and max temperature ${today.max_temp} Celsius , Weather is ${today.weather_state_name}`);
    hide.style.display = 'block';
    let weatherFetch = `<ul class="ulStyle">
                              <li><strong>${data.title}</strong></li>
                              <li>Country: <em>${parent.title}</em> </li>
                              <li>Today ${dd} the weather is <strong>${today.weather_state_name}</strong></li>
                              <li>Weather tomorrow will be: <strong>${nextDay.weather_state_name}</strong></li>
                               <li>Todays Minimum Temperature expected to be<br> <strong>${today.min_temp}</strong> Celsius</li>
                               <li>Todays Maximum Temperature expected to be<br> <strong>${today.max_temp}</strong> Celsius</li>
                            </ul> `;
    weatherHtml.innerHTML += weatherFetch;    
    let respondForecast = `<ul class="ulStyle">
                                <h3><strong>4 days forecast</strong></h3>
                                <h4><em>${data.title}</em></h4>
                                <li>${after2Days.weather_state_name}</li>
                                <li>${after3Days.weather_state_name}</li>
                                <li>${after4Days.weather_state_name}</li>
                                <li>${after5Days.weather_state_name}</li>
                            </ul>
                            `;    
    forecast.innerHTML += respondForecast;
})
.catch(error => console.log(error));
}

setTimeout(() => {
    //London Weather
    getWeather(44418);
    //Athens Weather
    getWeather(946738);    
     //Newcastle Weather
    getWeather(30079);    
},1000)






