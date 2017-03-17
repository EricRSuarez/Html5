var sample = 'A->B: Mensaje';
var diagram = Diagram.parse(sample);
diagram.drawSVG('diagram', {
theme: 'hand' // o 'simple'
});