document.querySelector('.burger').addEventListener('click', function () {
   this.classList.toggle('active');
   document.querySelector('.burger__nav').classList.toggle('open');
});
