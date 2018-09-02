//create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    //Create XHR object
    var xhr = new XMLHttpRequest();
    //OPEN -type, url/file, async
    xhr.open('GET', 'sampleText.txt', true);
    xhr.onload = function () {
        if (this.status == 200) {
            //console.log(this.responseText);
            document.getElementById('text').innerHTML = this.responseText;
        } else if (this.status == 404) {
            document.getElementById('text').innerHTML = "text not found";
        }
    };

    //send request
    xhr.send();

}
//xhr.onreadystatechange = function () {
//    if (this.readyState == 4 && this.status == 200) {
//        console.log(this.responseText);
//    }
//};
// Sends request
//xhr.send();
//}

//---------------HTTP STATUS---------------------
//200: OK
//403: FORBITTEN
//404: NOT FOUND

//---------------ReadyState Values------------
//0: request not initialized
//1: server connection established
//2: request received
//3: processing request
//4: request finished and response is ready