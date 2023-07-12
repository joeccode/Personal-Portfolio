window.onload = function() {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll("a");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          const target = document.querySelector(hash);
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });

        // Load the navbar content using JavaScript
        fetch('Navbar.html')
        .then(response => response.text())
        .then(data => document.getElementById('navbar').innerHTML = data)
        .catch(error => console.error(error));
};

// Scroll-to-top button
const scrollToTop = document.querySelector(".scroll-to-top");
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});

scrollToTop.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  
    // Smoothly reveal elements on page load
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach(function(fadeIn) {
      fadeIn.style.opacity = 0;
      fadeIn.style.transform = "translateY(20px)";
      fadeIn.style.animation = "fadeIn 1s ease-in-out forwards";
    });
  
    // Toggle menu on mobile devices
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    menuToggle.addEventListener("click", function() {
      menu.classList.toggle("show");
    });
    document.addEventListener("click", function(event) {
      if (
        !menuToggle.contains(event.target) &&
        !menu.contains(event.target)
      ) {
        menu.classList.remove("show");
      }
    });
  
    // Toggle active class on menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(function(menuItem) {
      menuItem.addEventListener("click", function() {
        menuItems.forEach(function(item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  
    // Toggle class on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 500) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
  });
  var container = document.querySelector('.photo-reel-container');
  var isDragging = false;
  var startX = 0;
  var scrollLeft = 0;

  container.addEventListener('mousedown', function(e) {
    isDragging = true;
    container.classList.add('grabbing');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', function() {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('grabbing');
    }
  });

  container.addEventListener('mouseup', function() {
    if (isDragging) {
      isDragging = false;
      container.classList.remove('grabbing');
    }
  });

  container.addEventListener('mousemove', function(e) {
    if (isDragging) {
      e.preventDefault();
      var x = e.pageX - container.offsetLeft;
      var scroll = x - startX;
      container.scrollLeft = scrollLeft - scroll;
    }
  });

  container.addEventListener('wheel', function(e) {
    e.preventDefault();
    var delta = e.deltaY || e.detail || e.wheelDelta;
    container.scrollLeft += delta;
  });

  container.addEventListener('mousewheel', function(e) {
    e.preventDefault();
    var delta = e.deltaY || e.detail || e.wheelDelta;
    container.scrollLeft += delta;
  });