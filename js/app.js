const checkbox = document.querySelector('#checkbox');

// configuramos el modo dark si es predeterminado del sistema
/* if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    window.addEventListener('load', function(){
        checkbox.setAttribute('checked', true);
        document.body.classList.add('is-dark-mode');
    })
} */

// Alternamos entre modo Dark o Light
checkbox.addEventListener('change', function(event){
    document.body.classList.toggle('is-dark-mode');

    //guardamos el modo en localStorage
    if (document.body.classList.contains('is-dark-mode')) {
        localStorage.setItem('dark-mode', 'true')
    } else {
        localStorage.setItem('dark-mode', 'false')
    }
});

// obtenemos el modo actual activo
if (localStorage.getItem('dark-mode') == 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('is-dark-mode');
    checkbox.setAttribute('checked', true);
}
if (localStorage.getItem('dark-mode') == 'false') {
    document.body.classList.remove('is-dark-mode')
	checkbox.checked = false;
}