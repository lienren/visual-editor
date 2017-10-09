'use strict';

const {
    app,
    BrowserWindow
} = require('electron')

var mainWindow = null;

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024,
        frame: true,
        center: true,
        resizable: true
    });
    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});