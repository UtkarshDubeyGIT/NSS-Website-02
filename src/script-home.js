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
document.addEventListener('DOMContentLoaded', function() {
    var heroHeading = document.getElementById('hero-heading');
    var cursorSpan = document.createElement('span');
    cursorSpan.classList.add('cursor');
    heroHeading.appendChild(cursorSpan);
  
    var texts = ["NSS", "NGO", "Not Me But You"];
    var currentText = 0;
    var i = 0;
    var isDeleting = false;
    var typingSpeed = 100; // Typing speed in milliseconds
    var deletingSpeed = 50; // Deleting speed in milliseconds
    var pauseBeforeDeleting = 2000; // Pause in milliseconds before starting to delete
  
    function typeWriter() {
      var fullTxt = texts[currentText];
  
      if (isDeleting) {
        // Remove char
        heroHeading.textContent = fullTxt.substring(0, i - 1);
        i--;
      } else {
        // Add char
        heroHeading.textContent = fullTxt.substring(0, i + 1);
        i++;
      }
  
      // Re-append the cursor span every time the text changes
      heroHeading.appendChild(cursorSpan);
  
      if (!isDeleting && i === fullTxt.length) {
        // Pause at end
        isDeleting = true;
        setTimeout(typeWriter, pauseBeforeDeleting); // Add a pause before deleting
      } else if (isDeleting && i === 0) {
        // Move to next text
        isDeleting = false;
        currentText++;
        if (currentText >= texts.length) currentText = 0;
        setTimeout(typeWriter, 500); // Short pause before typing next text
      } else {
        setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
      }
    }
  
    // Start the effect
    typeWriter();
  });
