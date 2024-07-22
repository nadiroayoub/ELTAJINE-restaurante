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