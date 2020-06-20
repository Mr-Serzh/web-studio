(() => {
  document.querySelector('.js-filter').addEventListener('button', e => {
    if (e.target.id == 'filt-all') {
      resetClass();
    }
    if (e.target.id == 'filt-web') {
      resetClass();
      document.querySelectorAll('.examples-portfolio > li:not(.type-web)').forEach(el => {
        el.classList.toggle('is-hidden');
      });
    }
    if (e.target.id == 'filt-widg') {
      resetClass();
      document.querySelectorAll('.examples-portfolio > li:not(.type-widg)').forEach(el => {
        el.classList.toggle('is-hidden');
      });
    }
    if (e.target.id == 'filt-design') {
      resetClass();
      document.querySelectorAll('.examples-portfolio > li:not(.type-design)').forEach(el => {
        el.classList.toggle('is-hidden');
      });
    }
    if (e.target.id == 'filt-mark') {
      resetClass();
      document.querySelectorAll('.examples-portfolio > li:not(.type-mark)').forEach(el => {
        el.classList.toggle('is-hidden');
      });
    }

    function resetClass() {
      document.querySelectorAll('.examples-portfolio > .is-hidden').forEach(el => {
        el.classList.toggle('is-hidden');
      });
    }
  });
})();
