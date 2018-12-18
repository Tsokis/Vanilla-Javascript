// axios
axios.get("https://cdn.theunicorn.ac/temp-assets/events.json")
.then( res => {
    let responseArr = res.data;    
    const display = document.querySelector('.output');
    responseArr.forEach( item => {
    let title = JSON.stringify(item.title);
    let u_day = JSON.stringify(item.u_day);
    display.innerHTML += `<ul>
        <li>${title} on ${u_day}</li>
        </ul>`; 
    });       
})
.catch((error) =>{
    console.log(error);
});

axios.get("http://api.tvmaze.com/shows")
.then( res => {
    const tv = document.querySelector('.tv');
    let responseArray = res.data;
    responseArray.forEach( item => {
        let name = JSON.stringify(item.name);
        let summary = JSON.stringify(item.summary);
        tv.innerHTML +=`<li>${name} with description ${summary}</li>`;
    });
})
.catch( error => {
    console.log(error);
});

//Async Await
async function getMovies() {
    const res = await fetch("http://api.tvmaze.com/shows");  
    const data = await res.json();
    console.log(data);
}
getMovies();