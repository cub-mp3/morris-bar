

// responsive navbarresponsive navbarresponsive navbar responsive navbar

 const nav = document.getElementById('navbar')
 const close = document.getElementById('close')
 const menu = document.getElementById('menu')

 menu.addEventListener('click', () => {
    nav.classList.add('data-visible');
 })

 close.addEventListener('click', () => {
    nav.classList.remove('data-visible')
 })


 menu.addEventListener('click', () => {
    console.log('Adding class');
    nav.classList.add('data-visible');
  });
  
  close.addEventListener('click', () => {
    console.log('Removing class');
    nav.classList.remove('data-visible');
  });


