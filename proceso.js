
// Base Pre-entrega 01
const cupoMaximo = 2;
let inscripciones = 0;

for (let i = 0; i < cupoMaximo; i++) {
    let tuNombre = prompt("👋¡Hola! Para anotarte a la clase, escribí tu nombre y apellido");
    let tuPractica = parseInt(prompt("🥰 ¿Qué horario preferís? (Debe ser un número)"));

    if (tuNombre.trim() === "" || isNaN(tuPractica)) {
        alert("🤥 Vamos de nuevo. Asegurate de escribir tu nombre completo y que el horario sea un número.");
        i--; // restar uno para repetir el intento
    } else {
        inscripciones++; // sumar un inscripto
        alert("😍 Bienvenid@ " + tuNombre.toUpperCase() + ", te anotaste en la clase de Yoga Integral a las " + tuPractica + " horas.");
        alert("Se ocuparon " + inscripciones + " de " + cupoMaximo + " lugares de la sala");
    }
    // verificador
    if (inscripciones === cupoMaximo) {
        alert("Ya no hay cupo 🥺 ¡Probá con otro horario!");
        break;
    }

    //Prácticas
    const cupoMaximo = 2;
    let inscripciones = [];

    //Constructor de Clases disponibles
    function Clases(estilo, dia, hora, cupo) {
        this.estilo = estilo;
        this.dia = dia;
        this.hora = hora;
        this.cupo = cupo;
    }
    const Integral = new Clases("Yoga Integral", "Lunes a Viernes", "20 y 21 hs", "12 personas")
    const Kundalini = new Clases("Kundalini Yoga", "Martes y Jueves", "17 y 19 hs", "10 personas")
    const Hatha = new Clases("Hatha Yoga", "Viernes y Sábados", "17 y 19 hs", "12 personas")
    const Vinyasa = new Clases("Vinyasa Yoga", "Lunes y Miercoles", "17 y 19 hs", "12 personas")
        */

    //Constructor de Practicantes
    function Practicantes(nombre, edad, clase_elegida) {
        this.nombre = nombre;
        this.edad = edad;
        this.clase_elegida = clase_elegida;
    }
    let nombre = prompt("👋¡Hola! Para anotarte a la clase, escribí tu nombre y apellido");
    let edad = prompt("🤸 ¿Cuál es tu edad?")
    let clase_elegida = prompt("🥰 ¿Qué estilo preferís? Elegí entre Integral, Kundalini, Hatha y Vinyasa");
    let Practicante = new Practicantes(nombre, edad, clase_elegida)
    console.log("Nuevo Practicante registrado", Practicante)
        */

    //Constructor de Practicantes con Clases
    class Practicante {
        constructor(nombre, edad, clase_elegida) {
            this.nombre = nombre;
            this.edad = edad;
            this.clase_elegida = clase_elegida;
        }
        bienvenida() {
            return "¡Hola! Para anotarte a la clase, escribí tu nombre y apellido"
        }
        edad() {
            return "¿Cuántos años tenés?"
        }
        clase_elegida() {
            return "¿Que estilo de Yoga querés practicar?"
        }
        toString() {
            return ""
        }
    }
    const NuevoPracticante = new Practicante("", "", "");
    console.log(NuevoPracticante);
*/

    //Arays de practicas disponibles
    const clasesDisponibles = [
        { estilo: "Hatha", dia: "Lunes", hora: "10:00", capacidad: cupoMaximo },
        { estilo: "Vinyasa", dia: "Martes", hora: "14:00", capacidad: cupoMaximo },
        { estilo: "Yin", dia: "Miércoles", hora: "18:00", capacidad: cupoMaximo },
        { estilo: "Ashtanga", dia: "Jueves", hora: "20:00", capacidad: cupoMaximo },
    ];

    // Función para inscripciones
    function inscribirUsuario(nombre, indiceClase) {
        const clase = clasesDisponibles[indiceClase];
        if (clase.capacidad > 0) {
            clase.capacidad--; // Reducir el cupo disponible
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

    // Filtro de clases
    function filtrarClases(filtro) {
        return clasesDisponibles.filter(function (clase) {
            return clase.dia.toLowerCase() === filtro.toLowerCase();
        });
    }

    //Función para alertar de cupo no disponible
    if (clasesDisponibles.every(function (clase) {
        return clase.capacidad === 0;
    })) {
        alert("😔 Todas las clases están llenas. ¡Probá otro día!");
        break;
    }

    //Funcion con GPT
    // Mostrar clases disponibles
    function mostrarClases() {
        return clasesDisponibles
            .map((clase, index) => `${index + 1}. ${clase.estilo} - ${clase.dia} a las ${clase.hora} (Cupo: ${clase.capacidad})`)
            .join("\n");
    }

    referencia
    https://devdocs.io/javascript/global_objects/map
    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    https://www.freecodecamp.org/espanol/news/como-utilizar-la-interpolacion-de-cadenas-en-javascript/