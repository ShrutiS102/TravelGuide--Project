document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll to sections
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Register button alert
    document.querySelector('.register a').addEventListener('click', function() {
      alert("Registration page is loading.");
    });


    // Expand Get Started buttons on hover
  const getStartedButtons = document.querySelectorAll('.get-started');
  getStartedButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
      button.classList.add('expanded');
    });
    button.addEventListener('mouseout', function() {
      button.classList.remove('expanded');
    });
  });
  
    // Intersection Observer for slide-in effect
    const slideInElements = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    slideInElements.forEach(element => {
      observer.observe(element);
    });
  
    // Placeholder for future enhancements
    console.log("Script loaded successfully!");
  });
  
  