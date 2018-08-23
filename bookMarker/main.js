// Listen for form submit
document.getElementById('myForm').addEventListener("submit", saveBookMark);


function saveBookMark(e) {
    //Get value siteName
    var siteName = document.getElementById('siteName').value;
    //Get value siteUrl
    var siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    //Object bookmark holding our values
    var bookmark = {
        name: siteName,
        url: siteUrl
    };
    /*Local Storage   --Check on Chrome or Mozilla dev tools on application local storage
    localStorage.setItem('test', 'saved test');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test')); */

    //Test if bookmarks var is null
    if (localStorage.getItem('bookmarks') === null) {
        //Initialize array
        var bookmarks = [];
        //Add to array
        bookmarks.push(bookmark);
        //Set to LocalStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        //Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //Add bookmark to array 
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    //Clear form
    document.getElementById('myForm').reset();

    //--NOTE:If we try to delete an item it deletes successfully,but we have to reload the page so the effects can take place
    // Re-fetch bookmarks from locastorage so we don't have to reload on Deleting an item
    fetchBookMarks();

    e.preventDefault();
}
// Delete bookmark
function deleteBookmark(url) {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Loop throught bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            //Remove from array
            bookmarks.splice(i, 1);
        }
    }
    //Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookMarks();

}

// Fetch BookMarks
function fetchBookMarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //Get output ID
    var BookmarkResults = document.getElementById('BookmarkResults');
    // Output
    BookmarkResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        BookmarkResults.innerHTML += '<div class="text-center">' +
            '<h3>' + name +
            '<a class="btn btn-primary ml-2" target="_blank" href=" ' + url + ' " >Visit</a>' +
            '<a onclick="deleteBookmark(\'' + url + '\' )" class="btn btn-danger ml-2"  href="#" >Delete</a>' +
            '</h3>' +
            '</div>';
    }
}
//Form Validation
function validateForm(siteName, siteUrl) {

    if (!siteName || !siteUrl) {
        alert('Fill in the form');
        return false;
    }
    //regular expression for URL pattern
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert("Use a valid URL");
        return false;
    }

    return true;

}