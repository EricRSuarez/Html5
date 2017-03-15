var tour = new Shepherd.Tour({
 defaults: {
 classes: 'shepherd-theme-default' } // theme (css añadido)
});
tour.addStep('example', {
 title: 'Example Shepherd', // título de la ventana
 text: 'Creating a Shepherd is easy too! Just create ...', // texto
 attachTo: '#menu1', // aparece en...
 advanceOn: '.docs-link click'
});

tour.addStep('example2', {
 title: 'Example Shepherd', // título de la ventana
 text: 'LALALAL', // texto
 attachTo: '#menu1', // aparece en...
 advanceOn: '.docs-link click'
});
tour.start();