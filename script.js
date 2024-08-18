"use strict";
const diccionario = {
    "tsi": "hola",
    "bijuo": "bueno",
    "te": "que",
    "tlacala": "tu cola",
    "si": "yi",
    "infly": "noches",
    "tecuet": "que haces",
    "dogii": "dolio",
    "agentla": "atencion",
    "bo": "no",
    "enye": "este",
    "usue": "mujer",
    "enom": "hombre",
    "oweo": "otros",
    "heto": "no se",
    "yis": "si es",
    "inistio": "podemos",
    "sio": "son",
    "jero": "mira",
    "ontote": "para que",
    "sahane": "tardes",
    "ras": "dias",
    "canoxti": "extincion",
    "condry": "corazon",
    "diuso": "bonita",
    "pupit": "papel",
    "git": "goma",
    "wod": "todo",
    "enje": "querer",
    "only": "amar",
    "epo": "templo",
    "udeba": "pensar",
    "el": "cielo",
    "fou": "luz",
    "ecolto": "mar",
    "fuli": "lluvia",
    "ancata": "vacio",
    "ripo": "rincon",
    "pip": "besar",
    "godo": "boda",
    "ent": "final",
    "eco": "señor",
    "araca": "acabar",
    "atala": "maximo",
    "utu": "total",
    "e": "su",
    "antalonc": "capacidad",
    "antoconpe": "contemplo",
    "antelo": "cabello",
    "oju": "ojos",
    "esm": "piel",
    "pi": "rio",
    "butuor": "bosque",
    "clou": "arroz"
};
const separar_palabras = (oracion) => {
    const palabras = oracion.match(/[\w]+|[.,!?;]/g);
    return palabras ? palabras : [];
};
function imprimir() {
    const textarea_heyluc = document.getElementById("heyluc-text");
    const textarea_espanol = document.getElementById("espanol-text");
    const oracion = textarea_heyluc.value;
    const palabras = separar_palabras(oracion);
    let traducciones = [];
    palabras.forEach((palabra) => {
        const traduccion = diccionario[palabra.toLowerCase()];
        if (traduccion) {
            console.log(`Traducción de "${palabra}": "${traduccion}"`);
            traducciones.push(traduccion);
        }
        else {
            console.log(`No se encontró traducción para "${palabra}"`);
            traducciones.push(palabra);
        }
        console.log(palabra);
    });
    textarea_espanol.value = traducciones.join(' ');
}
const button_traducir = document.getElementById("button_traducir");
button_traducir.addEventListener("click", imprimir);
