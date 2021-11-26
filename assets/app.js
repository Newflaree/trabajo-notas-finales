const promedio = ( n1, n2, n3) => {
  return (( n1 + n2 + n3 ) / 3);
}

// Datos personales
const  nombre = prompt( 'Ingrese su nombre' );
const  apellido = prompt( 'Ingrese su apellido' );
const  carrera = prompt( 'Ingrese su carrera' );

// Ramo 1
const ramo_1 = prompt( 'Ingrese el nombre de la primera asignatura' );
let r1_n1 = prompt( 'Ingrese la primera nota del ramo indicado' );
let r1_n2 = prompt( 'Ingrese la segunda nota del ramo indicado' );
let r1_n3 = prompt( 'Ingrese la tercera nota del ramo indicado' );
r1_n1 = Number(r1_n1);
r1_n2 = Number(r1_n2);
r1_n3 = Number(r1_n3);
const result1 = promedio( r1_n1, r1_n2, r1_n3);

// Ramo 1
const  ramo_2 = prompt( 'Ingrese el nombre de la segunda asignatura' );
let r2_n1 = prompt( 'Ingrese la primera nota del ramo indicado' );
let r2_n2 = prompt( 'Ingrese la segunda nota del ramo indicado' );
let r2_n3 = prompt( 'Ingrese la tercera nota del ramo indicado' );
r2_n1 = Number(r2_n1);
r2_n2 = Number(r2_n2);
r2_n3 = Number(r2_n3);
const result2 = promedio( r2_n1, r2_n2, r2_n3);

// Ramo 1
const ramo_3 = prompt( 'Ingrese el nombre de la tercera asignatura' );
let r3_n1 = prompt( 'Ingrese la primera nota del ramo indicado' );
let r3_n2 = prompt( 'Ingrese la segunda nota del ramo indicado' );
let nota_requisito = prompt( '¿Cuál es la nota mínima para pasar?' );
nota_requisito = Number(nota_requisito);
let r3_n3 = (( nota_requisito * 3) - r3_n1 - r3_n2);
r3_n1 = Number(r3_n1);
r3_n2 = Number(r3_n2);
r3_n3 = Number(r3_n3);

document.write(`
<h1>Notas finales</h1>

<p><span class='fw-bold'>Nombre: </span>${ nombre } ${ apellido }</p>
<p><span class='fw-bold'>Carrera: </span>${ carrera }</p>

<table class="table">
  <thead class='table-dark'>
    <tr>
      <th scope="col">Ramo</th>
      <th scope="col">Nota 1</th>
      <th scope="col">Nota 2</th>
      <th scope="col">Nota 3</th>
      <th scope="col">Promedio</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${ ramo_1 }</th>
      <td>${ r1_n1 }</td>
      <td>${ r1_n2 }</td>
      <td>${ r1_n3 }</td>
      <td>${ result1 }</td>
    </tr>
    <tr>
      <th scope="row">${ ramo_2 }</th>
      <td>${ r2_n1 }</td>
      <td>${ r2_n2 }</td>
      <td>${ r2_n3 }</td>
      <td>${ result2 }</td>
    </tr>
    <tr>
      <th scope="row">${ ramo_3 }</th>
      <td>${ r3_n1 }</td>
      <td>${ r3_n2 }</td>
      <td>${ r3_n3 }</td>
      <td>${ nota_requisito }</td>
    </tr>
  </tbody>
</table>

<p>Para aprobar el ramo JS con nota ${ nota_requisito }, necesitas obtener un ${ r3_n3 } en la nota 3</p>
`);






