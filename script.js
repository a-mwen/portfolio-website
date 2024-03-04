document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      });
    });
  
    const navbar = document.querySelector('.navbar');
    const navLinksContainer = document.querySelector('.nav-links');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > navbar.clientHeight) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  
    const menuButton = document.createElement('div');
    menuButton.classList.add('menu-button');
    navbar.appendChild(menuButton);
  
    menuButton.addEventListener('click', function () {
      navLinksContainer.classList.toggle('show');
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinksContainer.classList.remove('show');
      }
    });

  });
  