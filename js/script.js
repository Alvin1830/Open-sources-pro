function init() { "use strict";
    var button = document.getElementById("addbutton");
    button.onclick = handleButtonClick; }

window.onload = init;

//function handleButtonClick() { 
//alert("Button was clicked!");
//}
var li = document.createElement("li");
var paragraph = document.createElement("p");  

function handleButtonClick() {
    "use strict";
    var textInput = document.getElementById("nameTextInput");
    var Name = textInput.value;
    //var textInput = document.getElementById("commentTextInput");
    //var Comment = textInput.value;
    alert("Add" + Name);
    
    var paragraph = document.createElement("p");  
    paragraph.innerHTML = Name;
  
    var ul = document.getElementById("namelists");
    ul.appendChild(paragraph);
    
    
   var textfield = document.getElementById("commentTextInput");
   var Comment = textfield.value;
   li.innerHTML = Comment;
   ul.appendChild(li);
}


