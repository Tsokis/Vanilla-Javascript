"use strict";
const button = document.querySelector('.btn');
/**
 *
 * Creates a custom message
 * @param string
 */
function message(string) {
    const div = document.querySelector(".message");
    const p = document.createElement('p');
    const textMessage = document.createTextNode(`${string}`);
    p.appendChild(textMessage);
    div.appendChild(p);
    div.style.display = 'block';
    setTimeout(()=> {
        p.remove();
        div.style.display = 'none';
    },1500);
}
/**
 * Get data and display results
 */
async function getData() {
    const input = document.getElementById('searchInput').value;
    const apiKey = 'enter your api key';
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`;
    const ul = document.querySelector('.dataList');
    if(input === ""){
         message('You must enter something!!!');
    }else {
        let li;
        ul.innerHTML = "";
        const res = await fetch(url);
        const statusText = await res.statusText;
        if(statusText !== "OK"){
             message("Something went wrong!!")
       }
        const data = await res.json();
        let results = data.Search;
        if(!results){
             message('Please provide a valid title');
         }else{
            results.forEach(val => {
                li = document.createElement('li');
                li.className = 'crList';
                ul.appendChild(li);
                li.innerHTML += `
                    <div class="card">
                        <img src=${val.Poster} class="gImage" alt=" image not found">
                        <details class="details">
                        <summary style="margin-right: 25px;">info</summary>
                        <h4 class="title">${val.Title}</h4>
                        <p>${val.Type === "series"?val.Type.replace("series","Tv show"):val.Type} was released the year ${val.Year}</p>
                        <p>ImdbId</p>
                        <p>${val.imdbID}</p>
                        </details>
                    </div>`;
            });
        }
    }
}
/**
 *  Clears the input field after the button is clicked
 */
function clearInput(){
    const input = document.getElementById('searchInput');
    return input.value = "";
}

/* Event Listener on search button */
button.addEventListener('click',() => {
    getData();
    return clearInput();
});

