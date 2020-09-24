/*Debemos importar los elementos app y Browserwindow */
const {app,BrowserWindow } = require('electron');
/*Importamos el modulo core para rutas path*/
const path = require('path');

/*En una funcion creamos una instancia de clase BrowserWindow.Su constructor recibe un Object con propiedades width:Number,height:Number  y webPreferences:{Object}.Este objeto usará la propiedad preload para indicar que archivo es el que carga la ventana*/

function crearVentanaPrincipal() {
    let ventanaPrincipal = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            preload: path.join(__dirname,'preload.js')
        },
    });
    //VA EN LA FUNCION ESTO!
    /*Aun falta indicar a kla ventana que archivo va a cargar ella.
     Cargara la vista del index.html*/
     ventanaPrincipal.loadFile('index.html');
}


/* Cuando Electron este listo,usando el objeto app, creamos la ventana.Ojo,no se ejecuta la funcion,solo se asigna su nombre como argumento*/
app.whenReady().then(crearVentanaPrincipal);
