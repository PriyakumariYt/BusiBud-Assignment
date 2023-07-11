function showMenu() {
  let menu = document.querySelector("#menu-bar");
  let navlink = document.querySelector("#navlinks");
  menu.classList.toggle("fa-times");
  navlink.classList.toggle("active");
}
