const { app, BrowserWindow } = require('electron')

function createWindow () { 
	let win = new BrowserWindow({ frame: false, fullscreen: true })
	win.loadURL('http://digiturno.test/turnero/create')
}
app.on('ready', createWindow)

//npm install electron-packager -g
//electron-packager C:\Users\corpj\Desktop\electroprueba Turno --platform=win32 --arch=x64
 

 

