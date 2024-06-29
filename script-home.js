// adding menu close and open functionality
function toggleMenu() {
    const menu = document.getElementById('menu-list-items');
    const menuBarOpen = document.getElementById('menu-bar-open');
    const menuBarClose = document.getElementById('menu-bar-close');

    menu.classList.toggle('hidden'); // Toggle the "hidden" class

    // Toggle the menu icon visibility
    menuBarOpen.classList.toggle('hidden');
    menuBarClose.classList.toggle('hidden');
}
