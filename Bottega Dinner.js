// Menú del Comedor en JavaScript

// Datos del Menú
const menu = {
    desayuno: {
        platos: {
            "Tortitas": 5.99,
            "Tortilla española": 6.99,
            "Tostadas con jamón": 5.49,
            "Burrito de Desayuno": 7.49
        },
        acompañamientos: {
            "Patatas fritas": 2.99,
            "Bacon": 3.49,
            "Salchicha": 3.49,
            "Ensalada de Frutas": 2.99
        }
    },
    almuerzo: {
        platos: {
            "Hamburguesa con Queso": 8.99,
            "Sándwich de Pollo": 9.49,
            "Ensalada César": 7.99,
            "Sándwich vegetariano": 8.49
        },
        acompañamientos: {
            "Patatas Fritas": 2.99,
            "Aros de Cebolla": 3.49,
            "Ensalada Simple": 2.99,
            "Ensalada Mixta": 3.49
        }
    },
    cena: {
        platos: {
            "Filete de Lomo": 14.99,
            "Salmón": 13.99,
            "Espaguetis": 12.49,
            "Chuletas de Cerdo": 13.49
        },
        acompañamientos: {
            "Puré de Patatas": 3.49,
            "Verduras al Vapor": 3.99,
            "Arroz": 3.49,
            "Ensalada César": 3.99
        }
    }
};

const comentarios = [
    "¡Buena elección!",
    "¡Ese es un plato popular!",
    "¡Excelente selección!",
    "¡Te va a encantar!",
    "¡Una elección interesante!",
    "¡El favorito del chef!"
];

const horariosComida = ["desayuno", "almuerzo", "cena"];

// Función para obtener un comentario aleatorio
function obtenerComentarioAleatorio() {
    return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Función para pedir al usuario que seleccione del menú
function pedirSeleccionUsuario(opciones, tipoElemento) {
    let seleccion = "";
    while (!opciones.hasOwnProperty(seleccion)) {
        seleccion = prompt(`Por favor, selecciona un ${tipoElemento}:\n${Object.keys(opciones).join("\n")}`);
        if (!opciones.hasOwnProperty(seleccion)) {
            alert("Selección inválida. Por favor, inténtalo de nuevo.");
        }
    }
    return seleccion;
}

// Función para manejar la selección de la comida
function manejarSeleccionComida(horarioComida) {
    const comida = menu[horarioComida];
    let costoTotal = 0;

    alert(`¡Bienvenido a Bottega Comedor! Aquí está el menú de ${horarioComida}:`);

    // Mostrar menú
    alert(`Platos:\n${Object.entries(comida.platos).map(([item, price]) => `${item}: $${price.toFixed(2)}`).join("\n")}`);
    alert(`Acompañamientos:\n${Object.entries(comida.acompañamientos).map(([item, price]) => `${item}: $${price.toFixed(2)}`).join("\n")}`);

    // Seleccionar plato
    const plato = pedirSeleccionUsuario(comida.platos, "plato");
    alert(obtenerComentarioAleatorio());
    costoTotal += comida.platos[plato];

    // Seleccionar primer acompañamiento
    const acompañamiento1 = pedirSeleccionUsuario(comida.acompañamientos, "primer acompañamiento");
    alert(obtenerComentarioAleatorio());
    costoTotal += comida.acompañamientos[acompañamiento1];

    // Seleccionar segundo acompañamiento
    const acompañamiento2 = pedirSeleccionUsuario(comida.acompañamientos, "segundo acompañamiento");
    alert(obtenerComentarioAleatorio());
    costoTotal += comida.acompañamientos[acompañamiento2];

    // Mostrar costo total
    alert(`El costo total de tu ${horarioComida} es $${costoTotal.toFixed(2)}`);
}

// Programa Principal
function principal() {
    try {
        let horarioComida = "";
        while (!horariosComida.includes(horarioComida)) {
            horarioComida = prompt(`¿Qué comida te gustaría? (desayuno, almuerzo, cena)`).toLowerCase();
            if (horarioComida === null) {
                throw new Error("Selección de horario de comida cancelada por el usuario.");
            }
            if (!horariosComida.includes(horarioComida)) {
                alert("Horario de comida inválido. Por favor, inténtalo de nuevo.");
            }
        }
        manejarSeleccionComida(horarioComida);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Ejecutar el programa principal
principal();
