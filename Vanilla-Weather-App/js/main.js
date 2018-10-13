function getWeather(woeid) {
const targetUrl = `https://www.metaweather.com/api/location/${woeid}/`;
const proxieUrl = 'https://cors-anywhere.herokuapp.com/';
const weatherHtml = document.querySelector('.Weather');



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
    const parent = data.parent;
    let d = new Date();
    dd = d.toDateString();
    
    
    
    //test
    console.log(`City: ${data.title} Country:  ${parent.title} with min temperature ${today.min_temp} and max temperature ${today.max_temp} Celsius , Weather is ${today.weather_state_name}`);
    
    weatherHtml.innerHTML += `
                            <ul class="ulStyle">
                              <li>For City: <strong>${data.title}</strong></li>
                              <li>Country: <em>${parent.title}</em> </li>
                              <li>Today ${dd} the weather is <strong>${today.weather_state_name}</strong></li>
                              <li>Weather tomorrow will be: <strong>${nextDay.weather_state_name}</strong></li>
                               </li>Todays Minimum Temperature expected to be:\n <strong>${today.min_temp}</strong> Celsius</li>
                               <li>Todays Maximum Temperature expected to be:\n <strong>${today.max_temp}</strong> Celsius</li>
                            </ul>
                            `    
})
.catch(error => console.log(error));
}
//Londo Weather
getWeather(44418);


setTimeout(() => {    
    //Athens Weather
     getWeather(946738);
},3500)
//getWeather(946738)

setTimeout(() => {
    //Newcastele Weather
    getWeather(30079);
},4100)