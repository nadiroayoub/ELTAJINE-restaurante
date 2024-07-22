document.querySelectorAll('.navegacion a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });

      document.querySelectorAll('.navegacion a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    });
  });

  window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
