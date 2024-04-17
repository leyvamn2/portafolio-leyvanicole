alert('¡Bienvenida y bievenido a nuestro sitio web!');
let nombre = 'Luna';
let edad = 50;
let saldoDisponible = 1000;
let mensajeError ='Error! Completa todos los campos';
alert(mensajeError);

nombre=prompt('Ingrese su nombre');
edad=promp('Ingrese su edad');
if(edad>=18){
    alert('¡Puedes obtener tu licencia de conducir!');
}