
//DESAFIO DE DOM 21/10/2021..................................................................


//ID SALUDO INICIAL DE MI WEB SITE...........................................................

let saludo = document.getElementById("saludo");
let usuario = prompt("Bienvenido a tu tienda Online: 'Adhesivos Juancito', como te llamas?");
let textoenMayuscula= usuario.toUpperCase();

saludo.innerText = "Un gusto saludarte: " +" "+ textoenMayuscula;
saludo.style.font = "bold 45px leo";


//MODIFICACIÓN DE LAS OPCIONES EN MI BOTONERA ORIGINAL.......................................

let ventana = document.getElementsByTagName("a");
ventana[0].innerText = "SikaFlex";
ventana[1].innerText = "Soudal";
ventana[2].innerText = "Topex";
ventana[3].innerText = "Soldimix";
ventana[4].innerText = "Uhu";
ventana[5].innerText = "JuancitoWeb";
ventana[6].innerText = new Date().toLocaleString();



//CAMBIO DE COLOR DE UNA DE MIS SECCIONES.....................................................

let seccion = document.getElementById("siliconas");
console.log(seccion.innerHTML);
console.log(seccion.innerText);
seccion.style.background = "green";


// CAMPO- MODIFICACIÓN EN MI FORMULARIO.......................................................

document.getElementById("nombre").value = "JUAN LUIS";
document.getElementById("apellido").value = "SILVA RIOS";



//TABLA CON MIS PRODUCTOS MÁS VENDIDOS........................................................

const siliconas = [{ id: 1, nombre: "SIKAFLEX 11CF", precio: 40 },
    { id: 2, nombre: "SOUDAL FIX ALL", precio: 45 },
    { id: 3, nombre: "TOPEX POLIURETANO", precio: 30 },
    { id: 4, nombre: "SIKABOOM ESPUMA", precio: 47 },
    { id: 5, nombre: "SOLDIMIX EXTREME", precio: 46 },
    { id: 6, nombre: "SANISIL AC", precio: 14 },
    { id: 7, nombre: "TOPEX MAC TAC 227", precio: 32 },
];


//MI TABLA DE PRODUCTOS MÁS VENDIDOS USANDO DOM..............................................

let tabla = document.createElement("table");
tabla.setAttribute("class", "table table-striped");
let tablaBody = document.createElement("tbody");

for (const pegamento of siliconas) {
    let fila = document.createElement("tr");
  
    fila.innerHTML = `<td> ${pegamento.id}</td>
    <td> ${pegamento.nombre}</td>
    <td><b> SOLES: ${pegamento.precio}</b></td>`;
 
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);
document.getElementById("ingresoTop10").appendChild(tabla);



//MI HORARIO DE ATENCIÓN PARA LA VENTA.............................................................

alert("Te invito a conocer el Horario de Atención de mi tienda Online");


class miNegocio {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto(hora) {
        
        if (((hora >= 7) && (hora <= 11)) || ((hora >= 14) && (hora <= 20))) {
            return true;
        } else {
            return false;
        }
    }
}

const local1 = new miNegocio("Tienda de Adhesivos Juancito", "Lima Perú", "Juan Silva", "Ferretería");
console.log(local1);


for (i = 1; i <= 3; i++) {
    let horarioDeAtencion = parseInt(prompt("Ingrese un horario para saber si estamos atendiendo: (Ingresar horario militar)"));
    let abierto = local1.estaAbierto(horarioDeAtencion); 
    if (abierto) {
        alert("Abierto..!!! Estamos a la orden..!!!");
    } else {
        alert("En estos momentos estamos cerrados, te esperamos en nuestro horario virtual de: 7:00 am a 11:00 am y de las 14:00 a las 20:00");
    }
}



alert(" DIOS TE BENDIGA =) Gracias por visitarnos.");