document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menu-toggle');
    const nav = document.querySelector('nav');
  
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('#scroll-top');
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });
  
  document.querySelector('#scroll-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('header nav ul li a');
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
  
      // If the href matches the current path, add the "active" class
      if (currentPath.includes(href)) {
        link.classList.add('active');
      }
    });
  });
  