var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);
var changeBgColor = document.getElementById("changeBgColor");
var itemInput = document.querySelector('input[type="text"]');
//Form Manipulation
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

itemInput.addEventListener("keydown", runEvent);
changeBgColor.addEventListener("mousemove", runEvent);


//Delete event
itemList.addEventListener("click", removeItem);

// Form submit event
form.addEventListener("submit", addItem);

// Filter event listener
filter.addEventListener("keyup", filterItems);

function buttonClick(e) {
  //grabbing the id named header-title and changes to Item Sumbited
  document.getElementById("header-title").textContent = "List Item Changed!!";
  // grabbing the id named main and set the background to lightgrey
  document.querySelector("#main").style.backgroundColor = "lightgrey";
  var output = document.getElementById("output");
  output.innerHTML = `
    <h3>Displayed</h3>
    <h4><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></h4>
    `;
  var output1 = document.getElementById("output1");
  output1.innerHTML = `
    <h2>BootstrapGrid</h2>
    <p>Cras fermentum auctor leo, et iaculis libero.Phasellus vestibulum scelerisque lectus.Suspendisse potenti.Etiam luctus consequat sem ut fermentum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec orci nec urna mollis consectetur sit amet at enim.Curabitur sed risus vulputate nibh interdum posuere a in risus.Aliquam interdum sagittis faucibus.Mauris placerat dapibus justo rhoncus luctus.Duis venenatis vulputate nibh, non efficitur purus semper in .Curabitur pharetra euismod tortor non elementum.Mauris sem lacus, laoreet nec pharetra sit amet, posuere sit amet augue.Phasellus suscipit ut libero vitae sollicitudin.</p>
    `;
  var output2 = document.getElementById("output2");
  output2.innerHTML = "<h2>If you run an event like Search Items or rgb background color change it will display a default text!</h2>";
}

function runEvent(e) {
  //console.log("EVENT TYPE: " + e.type);
  //console.log(e.target.value);
  var output2 = document.getElementById("output2");
  output2.innerHTML = `<h1>Changed</h1><br>
                        <h4><b>On run event</b></h4><br>
                        <p><strong>If you <em>click</em> The Click Here button it will display the button text</strong></p>`;

  document.body.style.backgroundColor =
    "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}

// Add Item function
function addItem(e) {
  e.preventDefault();
  //Get input value
  var newItem = document.getElementById("item").value;

  //Create new li element
  var li = document.createElement("li");
  //Add class
  li.className = "list-group-item";
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  //Create del button element
  var deleteBtn = document.createElement("button");
  //Add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  //Append button to li element
  li.appendChild(deleteBtn);
  //Append li to list
  itemList.appendChild(li);
}

// Remove Item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure you want to delete this Item?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter items function
function filterItems(e) {
  //Convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get list
  var items = itemList.getElementsByTagName("li");
  //Convert to an array
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}