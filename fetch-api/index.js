//IF YOU HAVE VSCODE YOU CAN OPEN IT WITH LIVE SERVER EXTENSION OR WITH SOME KIND OF SERVER
//ELSE IT WONT WORK DUE TO CORS POLICY,OR YOU CAN DISABLE YOUR BROWSER SECURITY BUT ITS NOT RECOMMENDED
//button with id getText
document.getElementById('getText').addEventListener('click', getText);
//button with id getUsers
document.getElementById('getUsers').addEventListener('click', getUsers);
//button with id getPosts
document.getElementById('getPosts').addEventListener('click', getPosts);
//form event listener
document.getElementById('addPost').addEventListener('submit', addPost);
//---------------functions--------------------------------------
// function fetching sample text
function getText() {
    //------------ES5-------------------
    //fetch('sample.txt').then(function (res) {
    //    return res.text();
    //}).then(function (data) {
    //    console.log(data);
    //})
    ///------------ES6-------------------
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            document.getElementById('output').innerHTML = data;
        })
        .catch((err) => console.log(err));
}

// function for fetching the users.json file
function getUsers() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let ouput = '<h2>Users</h2>';
            data.forEach(function (user) {
                ouput += `
                    <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    </ul>
                `;
            });
            document.getElementById('output').innerHTML = ouput;
        });
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let ouput = '<h2 class="mb-4">Posts</h2>';
            data.forEach(function (posts) {
                ouput += `
                <div class="card card-body mb-3">               
                    <h3>Title: ${posts.title}</h3>
                    <p>Body: ${posts.body}</p>
                    <span>UserID: ${posts.userId}</span> 
                    <span>ID: ${posts.id}</span>                    
                    </div>
                `;
            });
            document.getElementById('output').innerHTML = ouput;
        })
        .catch();

}
// check the dev tools of your browser in order to actually see the post
function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data));


}