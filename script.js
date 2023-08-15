function ChangeName(){
   var name = prompt("What is your name?");

   if (name != null) {
    document.getElementById("inputName").innerHTML = 
    "Hello" + " " + name;
   }
}