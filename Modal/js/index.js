//Get modal element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for click
modalBtn.addEventListener('click', openModal);
//Listen for close
closeBtn.addEventListener('click', closeModal);
//listen for Outside click
window.addEventListener('click', outsideClick);

//function to open modal
function openModal() {
    modal.style.display = 'block';
}

//function to close modal
function closeModal() {
    modal.style.display = 'none';
}

//function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}