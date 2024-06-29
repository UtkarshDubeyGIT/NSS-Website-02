// adding menu close and open functionality
function toggleMenu() {
    const menu = document.getElementById('menu-list-items');
    const menuBarOpen = document.getElementById('menu-bar-open');
    const menuBarClose = document.getElementById('menu-bar-close');
    const menubackground2 = document.getElementById('menu-background-2');
    
    const menubackground1 = document.getElementById('menu-background-1');
    menu.classList.toggle('hidden'); // Toggle the "hidden" class

    // Toggle the menu icon visibility
    menuBarOpen.classList.toggle('hidden');
    menuBarClose.classList.toggle('hidden');
    menubackground2.classList.toggle('backdrop-blur-3xl');
    menubackground1.classList.toggle('bg-white')
}
