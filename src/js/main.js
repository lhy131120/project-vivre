console.log("main.js run");
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.header .close-btn');
  const collapse = document.querySelector('.header .collapse');
  
  closeBtn.addEventListener('click', () => {
    collapse.classList.toggle('show');
    closeBtn.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!collapse.contains(e.target) && !closeBtn.contains(e.target) && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
      closeBtn.classList.remove('open');
    }
  });

  // Close menu on window resize if larger than mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98 && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
      closeBtn.classList.remove('open');
    }
  });
});