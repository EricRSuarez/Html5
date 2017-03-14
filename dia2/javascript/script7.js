// Función de ventana de alerta
function mensaje() {
 // error, success, info, warning
 toastr.error('Aquí el mensaje de texto.', 'Título de notificación');
 toastr.options = {
closeButton: true,
progressBar: true,
positionClass: 'toast-top-right',
preventDuplicates: false,
timeOut: 2000,
 }
}