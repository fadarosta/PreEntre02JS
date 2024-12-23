const cupoMaximo = 2;
let inscripciones = [];
const clasesDisponibles = [
    { estilo: "Integral", dia: "Lunes", hora: "10:00", capacidad: 0 },
    { estilo: "Kundalini", dia: "Martes", hora: "14:00", capacidad: cupoMaximo },
    { estilo: "Hatha", dia: "Miércoles", hora: "18:00", capacidad: 0 },
    { estilo: "Ashtanga", dia: "Jueves", hora: "20:00", capacidad: cupoMaximo },
];

// Función para mostrar clases disponibles
function mostrarClases() {
    return clasesDisponibles
        .map(function (clase, index) {
            return (index + 1) + ". " + clase.estilo + " - " + clase.dia +
                " a las " + clase.hora + " (Cupo: " + clase.capacidad + ")";
        })
        .join("\n");
}

// Función para inscribir a una persona
function inscribirUsuario(nombre, indiceClase) {
    const clase = clasesDisponibles[indiceClase];
    if (clase.capacidad > 0) {
        clase.capacidad--; // resta 1 a la capacidad
        inscripciones.push({ nombre: nombre, clase: clase });

        var mensaje = "✅ ¡Muy bien!\n" +
            nombre + ", estás inscripto/a a la clase de " +
            clase.estilo + " el " + clase.dia +
            " a las " + clase.hora + ".";
        alert(mensaje);
    } else {
        alert("❌ Mil disculpas, no hay cupos disponibles para esta clase.");
    }
}

// Filtrar las clases
function filtrarClases(filtro) {
    return clasesDisponibles.filter((clase) => clase.dia.toLowerCase() === filtro.toLowerCase());
}

// Inicio de la simulación
for (let i = 0; i < cupoMaximo; i++) {
    let tuNombre = prompt("👋 ¡Hola! Para anotarte a una clase, escribí tu nombre:");
    if (!tuNombre.trim()) {
        alert("Por favor, ingresá un nombre válido.");
        i--; // Repetir el intento
        continue;
    }

    alert("📋 Estas son las clases disponibles:\n" + mostrarClases());
    let tuClase = parseInt(prompt("¿A qué clase querés inscribirte? (Elegí el número correspondiente)")) - 1;

    if (isNaN(tuClase) || tuClase < 0 || tuClase >= clasesDisponibles.length) {
        alert("Por favor, ingresá un número válido.");
        i--; // Repetir el intento
        continue;
    }

    inscribirUsuario(tuNombre, tuClase);

    if (clasesDisponibles.every((clase) => clase.capacidad === 0)) {
        alert("😔 Todas las clases están llenas. ¡Probá otro día!");
        break;
    }
}

// Resumen de inscripciones
var resumen = "Te inscribiste a:\n" +
    inscripciones
        .map(function (inscripcion) {
            return inscripcion.nombre + " - " + inscripcion.clase.estilo +
                " (" + inscripcion.clase.dia + " a las " +
                inscripcion.clase.hora + ")";
        })
        .join("\n");

alert(resumen);
