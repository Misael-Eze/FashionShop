const productos = [
  { nombre: "Vestido Floral", categoria: "Vestidos", imagen: "assets/Vestido.png" },
  { nombre: "Vestido Primavera", categoria: "Vestidos", imagen: "assets/Vestido2.png" },
  { nombre: "Sueter Vino", categoria: "Sueter", imagen: "assets/Sweater.png" },
  { nombre: "Sueter Lavanda", categoria: "Sueter", imagen: "assets/Sweater 2.png" },
  { nombre: "Camisa Primavera", categoria: "Camisa", imagen: "assets/Camisa.png" },
  { nombre: "Camisa Beige", categoria: "Camisa", imagen: "assets/Camisa2.png" },
  { nombre: "Sueter Cuello", categoria: "Sueter", imagen: "assets/Sueter.png" },
  { nombre: "Sueter Gris", categoria: "Sueter", imagen: "assets/Sueter2.png" },
  { nombre: "Blusa Floral", categoria: "Blusa", imagen: "assets/Blusa.png" },
  { nombre: "Blusa Pastel", categoria: "Blusa", imagen: "assets/Blusa2.png" }
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
  const col = document.createElement("div");
  col.className = "col-md-3 mb-4"; // 4 columnas por fila (12 / 3 = 4)

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body text-center">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text text-muted">${producto.categoria}</p>
      </div>
    </div>
  `;

  contenedor.appendChild(col);
});

/* 
Color de fondo del navbar (claro, suave):

Fondo: Gris claro para que contraste bien con el logo negro.

Código HEX: #F4F4F4

RGB: (244, 244, 244)

Colores de los enlaces en el navbar:

Enlaces: Magenta pastel para destacar, pero suave.

Código HEX: #F1A7D1

RGB: (241, 167, 209)

Hover de los enlaces:

Hover: Un Azul pastel para el efecto al pasar el mouse.

Código HEX: #A7C7E7

RGB: (167, 199, 231)

Tipografía (Montserrat):

Fuente: Montserrat (con peso 500 o 600).

Color: Para los enlaces, usa #333 (gris oscuro) por defecto, y #000 (negro) para el logo.

Tamaño: Los enlaces pueden estar entre 18px y 20px. El logo puede ser más grande, por ejemplo 28px.*/