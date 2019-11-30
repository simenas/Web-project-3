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
