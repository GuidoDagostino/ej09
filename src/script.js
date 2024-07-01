// <!-- Utilizando - > Pop, Push, Shift, Unshift -->

// 1. Inventario de Frutas
function inventarioFrutas() {
  let frutas = ["manzana", "banana", "pera", "naranja", "kiwi"];
  const ultimaFruta = frutas.pop();
  console.log("Fruta eliminada:", ultimaFruta);
  frutas.push("mango");
  document.getElementById('frutas-output').textContent = `Inventario: ${frutas.join(', ')}`;
}

// 2. Lista de Tareas
function listaTareas() {
  let tareas = ["limpiar", "cocinar", "estudiar"];
  const primeraTarea = tareas.shift();
  console.log("Tarea completada:", primeraTarea);
  tareas.unshift("hacer ejercicio");
  document.getElementById('tareas-output').textContent = `Tareas: ${tareas.join(', ')}`;
}

// 3. Fila de Espera
function filaEspera() {
  let clientes = ["cliente1", "cliente2", "cliente3"];
  clientes.push("cliente4", "cliente5");
  const primerCliente = clientes.shift();
  console.log("Atendiendo a:", primerCliente);
  document.getElementById('clientes-output').textContent = `Clientes en espera: ${clientes.join(', ')}`;
}

// 4. Rotación de Elementos
function rotacionElementos() {
  let numeros = [1, 2, 3, 4, 5];
  for (let i = 0; i < 3; i++) {
      const ultimo = numeros.pop();
      numeros.unshift(ultimo);
  }
  document.getElementById('numeros-output').textContent = `Números: ${numeros.join(', ')}`;
}

// 5. Carrito de Compras
function carritoCompras() {
  let carrito = [];
  for (let i = 0; i < 3; i++) {
      const producto = prompt("Ingrese un producto para agregar al carrito:");
      carrito.push(producto);
  }
  const eliminarProducto = confirm("¿Desea eliminar el último producto agregado?");
  if (eliminarProducto) {
      carrito.pop();
  }
  document.getElementById('carrito-output').textContent = `Carrito: ${carrito.join(', ')}`;
}

// Map

// 6. Doblar Valores
function doblarValores() {
  let valores = [1, 2, 3, 4, 5];
  const dobles = valores.map(valor => valor * 2);
  document.getElementById('valores-output').textContent = `Dobles: ${dobles.join(', ')}`;
}

// 7. Nombres en Mayúsculas
function nombresMayusculas() {
  let nombres = ["ana", "juan", "luis", "maria"];
  const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
  document.getElementById('nombres-output').textContent = `Nombres en mayúsculas: ${nombresMayus.join(', ')}`;
}

// 8. Precios con IVA
function preciosIVA() {
  let precios = [100, 200, 300];
  const preciosConIVA = precios.map(precio => precio * 1.21);
  document.getElementById('precios-output').textContent = `Precios con IVA: ${preciosConIVA.join(', ')}`;
}

// 9. Cuadrados de Números
function cuadradosNumeros() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cuadrados = numeros.map(numero => numero * numero);
  document.getElementById('cuadrados-output').textContent = `Cuadrados: ${cuadrados.join(', ')}`;
}

// <!-- Utilizando - > Map -->

// 10. Números Pares
function numerosPares() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const pares = numeros.filter(numero => numero % 2 === 0);
  document.getElementById('pares-output').textContent = `Números pares: ${pares.join(', ')}`;
}

// 11. Palabras Largas
function palabrasLargas() {
  let palabras = ["sol", "montaña", "río", "valle", "maravilloso"];
  const largas = palabras.filter(palabra => palabra.length > 5);
  document.getElementById('palabras-output').textContent = `Palabras largas: ${largas.join(', ')}`;
}

// 12. Productos en Oferta
function productosOferta() {
  let productos = [
      { nombre: "producto1", precio: 600 },
      { nombre: "producto2", precio: 400 },
      { nombre: "producto3", precio: 300 }
  ];
  const oferta = productos.filter(producto => producto.precio < 500);
  document.getElementById('productos-output').textContent = `Productos en oferta: ${oferta.map(p => p.nombre).join(', ')}`;
}

// 13. Estudiantes Aprobados
function estudiantesAprobados() {
  let estudiantes = [
      { nombre: "Ana", nota: 6 },
      { nombre: "Juan", nota: 8 },
      { nombre: "Luis", nota: 7 }
  ];
  const aprobados = estudiantes.filter(estudiante => estudiante.nota >= 7);
  document.getElementById('estudiantes-output').textContent = `Estudiantes aprobados: ${aprobados.map(e => e.nombre).join(', ')}`;
}

// 14. Tareas Completadas
function tareasCompletadas() {
  let tareas = [
      { descripcion: "limpiar", completada: true },
      { descripcion: "cocinar", completada: false },
      { descripcion: "estudiar", completada: true }
  ];
  const completadas = tareas.filter(tarea => tarea.completada);
  document.getElementById('completadas-output').textContent = `Tareas completadas: ${completadas.map(t => t.descripcion).join(', ')}`;
}

// <!-- Utilizando --> ForEach

// 15. Mostrar Lista
function mostrarLista() {
  let nombres = ["Ana", "Juan", "Luis", "Maria"];
  let output = '';
  nombres.forEach(nombre => {
      output += `${nombre}\n`;
  });
  document.getElementById('lista-output').textContent = output;
}

// 16. Sumar Edades
function sumarEdades() {
  let edades = [20, 25, 30, 35];
  let suma = 0;
  edades.forEach(edad => {
      suma += edad;
  });
  document.getElementById('edades-output').textContent = `Suma de edades: ${suma}`;
}

// 17. Aplicar Descuento
function aplicarDescuento() {
  let productos = [
      { nombre: "producto1", precio: 100 },
      { nombre: "producto2", precio: 200 },
      { nombre: "producto3", precio: 300 }
  ];
  productos.forEach(producto => {
      producto.precio *= 0.9;
  });
  document.getElementById('descuento-output').textContent = `Productos con descuento: ${productos.map(p => p.nombre + ' $' + p.precio.toFixed(2)).join(', ')}`;
}

// 18. Enviar Invitaciones
function enviarInvitaciones() {
  let invitados = ["Ana", "Juan", "Luis", "Maria"];
  let output = '';
  invitados.forEach(invitado => {
      output += `Invitación enviada a ${invitado}\n`;
  });
  document.getElementById('invitaciones-output').textContent = output;
}
