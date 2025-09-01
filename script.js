// Dragon Ball — Mini app solo con JS (sin HTML prehecho)
// Requiere un <div id="app"></div> en el HTML.
// Opcional: incluir Bootstrap CSS en el HTML para los estilos de los componentes.
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

// API de Dragon Ball
const API = "https://dragonball-api.com/api/characters";

// Traer datos de la primera página
async function cargarPersonajes() {
  const res = await fetch(API + "?limit=10");
  const data = await res.json();
  // guardamos los personajes en un array
  let personajes = data.items;

  console.log("Lista original:", personajes.map(p => p.name));

  // === BUSCAR ===
  let buscados = personajes.filter(p => p.name.toLowerCase().includes("go"));
  console.log("Buscados (contienen 'go'):", buscados.map(p => p.name));

  // === ORDENAR ===
  let ordenados = personajes.slice().sort((a, b) => a.name.localeCompare(b.name));
  console.log("Ordenados A-Z:", ordenados.map(p => p.name));

  // === AGREGAR ===
  let nuevo = {
    id: 999,
    name: "Personaje Inventado",
    ki: "1000",
    race: "Human",
    affiliation: "Test"
  };
  personajes.push(nuevo);
  console.log("Con agregado:", personajes.map(p => p.name));

  // === ELIMINAR ===
  personajes = personajes.filter(p => p.id !== 999);
  console.log("Después de eliminar:", personajes.map(p => p.name));
}

cargarPersonajes();
