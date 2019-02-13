# Welcome to Water Game Analytica!
### Your source for FRC win predictions and analysis

<script src="https://raw.githubusercontent.com/thedarknebula/Water_Game_Analytica/master/predictions.js"></script>

<style>
body {
// background-image: url("https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiD5M2S2rbgAhVp0oMKHRzrA-AQjRx6BAgBEAU&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FFTC%2Fcomments%2F7kay3r%2Fwoodie_flowers_appreciation_post%2F&psig=AOvVaw3f4L4FhuIqkhKEP0XRbjFw&ust=1550078349901094");
 background-color: #cccccc;
} 
</style>

<div id="text"></div>
 
// <script>
// document.getElementById("text").innerHTML = "Your #1 source for FRC win predictions";
// </script>

1. Choose your FRC event
2. Enter your alliance team numbers for a match
3. Enter opposing alliance numbers
4. Your precentage win chance will be predictedd based on CCWM.


<div class="dropdown">
  <button onclick="eventSelectbtn()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div> 

.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;} 

<script>
function eventSelectbtn() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
</script>
<br>

<label for="Your Team">Your Team :</label>

<input type="text" id="name" name="Team Name" required
       minlength="4" maxlength="4" size="10">

<label for="Friendly 2">Friendly 2 :</label>

<input type="text" id="name" name="Friendly 2" required
       minlength="4" maxlength="4" size="10">

<label for="Friendly 3">Friendly 3 :</label>

<input type="text" id="name" name="Friendly 3" required
       minlength="4" maxlength="4" size="10">


<br>
<br>


<label for="Opposing 1">Opposing 1 :</label>

<input type="text" id="name" name="Opposing 1" required
       minlength="4" maxlength="4" size="10">

<label for="Opposing 2">Opposing 2 :</label>

<input type="text" id="name" name="Opposing 2" required
       minlength="4" maxlength="4" size="10">

<label for="Opposing 3">Opposing 3 :</label>

<input type="text" id="name" name="Opposing 3" required
       minlength="4" maxlength="4" size="10">
<br>

 <button class = "markdown-button" type="introbutton">Go!</button>

