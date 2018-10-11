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
    const parent = data.parent;
    //test
    console.log(`City: ${data.title} Country:  ${parent.title} with min temperature ${today.min_temp} and max temperature ${today.max_temp} Celsius , Weather is ${today.weather_state_name}`);
    
    weatherHtml.innerHTML += `
                            <ul class="ulStyle">
                              <li>For City: <strong>${data.title}</strong></li>
                              <li>Country: <em>${parent.title}</em> </li>
                              <li>Weather is <em>${today.weather_state_name}</em></li>
                               </li>Min Temp: ${today.min_temp}</li>
                               <li>Max Temp: ${today.max_temp}</li>                               
                            <ul>
                            `    
})
.catch(error => console.log(error));
}
getWeather(44418);


setTimeout(() => {    
     getWeather(946738);
},3500)
//getWeather(946738)

setTimeout(() => {
    getWeather(30079);
},4100)