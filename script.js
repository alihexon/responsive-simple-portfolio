const menuElement = document.querySelector('.icon');
const menuDropdown = document.querySelector('.menu-dropdown');

function displayDropdown() {
  menuDropdown.classList.toggle('menu-on');
}

menuElement.addEventListener('click', () => displayDropdown);