function toggleMenu() {
    // toggle menu-js
    var mobileMenu = document.getElementById("siteMenu");
    mobileMenu.classList.toggle("OpenNav");
    // toggle overflow js
    var body = document.body;
    body.classList.toggle("overflow_hidden");
    // toggle button animate js
    var togglemenuIcon = document.getElementById("menuIcon");
    togglemenuIcon.classList.toggle("active");
}




/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownToggle() {
    document.getElementById("dropdownMenu").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
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
