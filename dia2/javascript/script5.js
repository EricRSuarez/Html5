function mensaje() {
 swal({
 title: 'Buenos días',
 text: '¿Como está usted?',
 imageUrl: 'http://sumedico.com/wp-content/uploads/2016/06/C%C3%B3mo_saber_si_tu_gato_te_quiere.jpg',
 imageWidth: 440,
 imageHeight: 250,
 padding: 20,
 animation: false,
 });
}


function cosa(){

	 swal({
	 title: 'Título',
	 text: 'Mensaje de texto',
	 type: 'success',
	 showCloseButton: true,
	 confirmButtonText: '<i class="fa fa-thumbs-up"></i> ¡Bien!',
	 confirmButtonColor: '#1db75a',
	 showCancelButton: true,
	 cancelButtonText: '<i class="fa fa-thumbs-down"></i> :(',
	 }).then(
	 function() { swal('¡Aceptado!') },
	 function() { swal('¡Cancelado!') }
	 );
	

}