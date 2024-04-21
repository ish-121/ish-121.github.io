document.addEventListener('DOMContentLoaded', function () {
    // Toggle the menu
    const menuToggle = document.querySelector('#menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
      });
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Show/hide scroll-to-top button based on scroll position
    const scrollTopButton = document.querySelector('#scroll-top');
    if (scrollTopButton) {
      document.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
          scrollTopButton.style.display = 'block';
        } else {
          scrollTopButton.style.display = 'none';
        }
      });
  
      // Smooth scrolling to the top
      scrollTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // Add "active" class to the navigation link matching the current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
  
      if (currentPath.endsWith(href)) {  // More precise matching
        link.classList.add('active');
      }
    });
  });
  