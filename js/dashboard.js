function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("container").style.opacity = "0.2";

  if (window.matchMedia("(min-width: 850px)").matches) {
    document.getElementById("container").style.opacity = "1";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("container").style.opacity = "1";
}

function closeNav2() {
  if (window.matchMedia("(max-width: 850px)").matches) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.opacity = "1";
  }
}

/*Secures all alerts*/
var elem = document.getElementById("alertBoxes");
var secureAlerts = document.getElementById("myBtn");

secureAlerts.addEventListener("click", mySecondFunction);

function mySecondFunction() {
  document.getElementById("securedAll").innerHTML = "SECURED";
  elem.remove();
}

/*Secures alert1*/
var alertBox1 = document.getElementById("alertBox1");
var secureAlert1 = document.getElementById("secureAlert1");

secureAlert1.addEventListener("click", removeAlertbox1);

function removeAlertbox1() {
  alertBox1.remove();
  console.log("test");
}
