const navSlide = () => {
     const burger = document.QuerySelector('.burger');
     const nav = document.QuerySelector('.navbar');
     const navLinks = document.querySelectorAll('.navbar');
     }
     
     burger.addEventListener('click', () => {
       // Toggle Nav
          nav.classList.toggle('nav-active');
          // Animate links
     navLinks.forEach((links, index) => { 
          if (links.style.animation) {
               link.style.animation = '';
          } else {
               link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3 } s`
          }
     });   
 });

navSlide();