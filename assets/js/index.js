const formulario = document.getElementById('Formulario');

function alerta () {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const select = document.getElementById('select').value;
    const mensaje = document.getElementById('mensaje').value;

    alert(`DE: ${nombre}  ${apellido} (${email})\n ASUNTO: ${select}\n MENSAJE: \n${mensaje}`)

}


formulario.addEventListener('submit', function(event){
    event.preventDefault(); 
    alerta()
})

formulario.addEventListener('keydown',function(event){
    if (event.key === 'Enter'){
    event.preventDefault();
    alerta()
    };
})