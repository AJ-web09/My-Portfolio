// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  // Toggle mobile navigation
  mobileNavToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close mobile navigation when a link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNavToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
  
  // Change navbar style on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Scroll animation for elements
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkScroll() {
    animatedElements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.85) {
        element.classList.add('visible');
      }
    });
  }
  
  // Check elements on initial load
  checkScroll();
  
  // Check elements on scroll
  window.addEventListener('scroll', checkScroll);
});



  const modal = document.getElementById('myModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  openBtn.onclick = () => modal.style.display = 'block';
  closeBtn.onclick = () => modal.style.display = 'none';

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };


  