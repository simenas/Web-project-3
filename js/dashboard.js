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
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("main").style.marginTop = "8em";
    document.getElementById("securedAll").innerHTML = "You are secured!";
    elem.remove();
    console.log("You are secured!");
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("main").style.marginTop = "14em";
    document.getElementById("securedAll").innerHTML = "You are secured!";
    elem.remove();
    console.log("You are secured!");
  } else {
    document.getElementById("securedAll").innerHTML = "You are secured!";
    elem.remove();
    console.log("You are secured!");
  }
}

/*Secures alert1*/
var alertBox1 = document.getElementById("alertBox1");
var secureAlert1 = document.getElementById("secureAlert1");

secureAlert1.addEventListener("click", removeAlertbox1);

function removeAlertbox1() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("main").style.marginTop = "3.8em";
    alertBox1.remove();
    console.log("Alertbox1 removed!");
  }

  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("main").style.marginTop = "6.3em";
    alertBox1.remove();
    console.log("Alertbox1 removed!");
  } else {
    alertBox1.remove();
    console.log("Alertbox1 removed!");
  }
}

/*Secures alert2*/
var alertBox2 = document.getElementById("alertBox2");
var secureAlert2 = document.getElementById("secureAlert2");

secureAlert2.addEventListener("click", removeAlertbox2);

function removeAlertbox2() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("main").style.marginTop = "7.5em";
    alertBox2.remove();
    console.log("Alertbox1 removed!");
  }
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("main").style.marginTop = "12.6em";
    alertBox2.remove();
    console.log("Alertbox2 removed!");
  } else {
    alertBox2.remove();
    console.log("Alertbox2 removed!");
  }
}

/*Secures alert3*/
var alertBox3 = document.getElementById("alertBox3");
var secureAlert3 = document.getElementById("secureAlert3");

secureAlert3.addEventListener("click", removeAlertbox3);

function removeAlertbox3() {
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("main").style.marginTop = "11em";
    alertBox3.remove();
    console.log("Alertbox3 removed!");
  }
  if (window.matchMedia("(max-width: 600px)").matches) {
    document.getElementById("main").style.marginTop = "18em";
    alertBox3.remove();
    console.log("Alertbox3 removed!");
  } else {
    alertBox3.remove();
    console.log("Alertbox3 removed!");
  }
}
