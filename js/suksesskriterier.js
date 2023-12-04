document.getElementById("btn1").onclick = function () {
   toggleVisibility("container1");
};

document.getElementById("btn2").onclick = function () {
   toggleVisibility("container2");
};

document.getElementById("btn3").onclick = function () {
   toggleVisibility("container3");
};

function toggleVisibility(id) {
   var element = document.getElementById(id);
   if (element.className == "visible") {
      element.className = "hidden";
   } else {
      element.className = "visible";
   }
}

/*"I have a set of buttons which I want to control what is visable on my 
 website depending on which button i clicket. Can you help me forulate 
 a script which controls the viability of container elements, using the 
 onClick-function to add and remove a class with "display: block" and 
 "diplay: none"? Attached code have four containers. Container 1 has three 
 buttons, and ewach button will show its related container when clicket. 
 If another button is clicked, or the same button is clicket again, 
 said container is hidden again. */
