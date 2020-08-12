// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/sysinfo.jpg',
  webPreferences: {
    nodeIntegration: true
  },
  });

  // Load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open DevTools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

// Run create window function
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){
    app.quit();
  }
});
