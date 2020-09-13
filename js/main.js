document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.main-small').classList.toggle('show');
    document.querySelectorAll('.page-show').forEach(button => {
      button.onclick = () => {
        document.querySelector('.main-small').classList.toggle('show')
    };
  });
  })
});
