/**
 * Personal Website JavaScript
 * Contains functionality for responsive navigation, smooth scrolling, and UI enhancements
 */

// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// Back to top button functionality
const myButton = document.getElementById("myBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Add smooth scrolling to all links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll("a[href^='#']");
  
  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }
  
  function smoothScroll(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close responsive menu if open
      const nav = document.getElementById("myTopnav");
      if (nav.className.includes("responsive")) {
        nav.className = "topnav";
      }
      
      // Scroll to the element
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.topnav a');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
