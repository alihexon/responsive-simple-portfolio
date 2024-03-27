const menuElement = document.querySelector('.icon');
const menuDropdown = document.querySelector('.menu-dropdown');

function displayDropdown() {
  if (menuDropdown.classList.contains('menu-on')) {
    menuDropdown.classList.remove('menu-on');
    menuDropdown.classList.add('menu-off');
  } else {
    menuDropdown.classList.remove('menu-off');
    menuDropdown.classList.add('menu-on');
  }
}

menuElement.addEventListener('click', displayDropdown);