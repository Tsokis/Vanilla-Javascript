document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUserS);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            //console.log(this.responseText);
            // OR
            var user = JSON.parse(this.responseText);
            //to access the name of the user
            //console.log(user.name);
            var output = "";
            output += '<ul>' +
                '<li>ID: ' + user.id + '</li>' +
                '<li>Name: ' + user.name + '</li>' +
                '<li>Email: ' + user.email + '</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
        }
    }
    //IMPORTANT
    xhr.send();
}

function loadUserS() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            //console.log(this.responseText);
            // OR
            var users = JSON.parse(this.responseText);
            //to access the name of the user
            //console.log(user.name);
            var output = "";
            for (var i in users) {
                output += '<ul>' +
                    '<li>IDs: ' + users[i].id + '</li>' +
                    '<li>Names: ' + users[i].name + '</li>' +
                    '<li>Emails: ' + users[i].email + '</li>' +
                    '</ul>';
            }
            document.getElementById('users').innerHTML = output;
        }
    }
    //IMPORTANT
    xhr.send();
}