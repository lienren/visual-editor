/*
 * @Author: Lienren 
 * @Date: 2017-10-09 20:31:40 
 * @Last Modified by: Lienren
 * @Last Modified time: 2017-10-10 09:56:19
 */
'use strict';

const {
    app,
    BrowserWindow
} = require('electron')

var mainWindow = null;

app.once('ready', function () {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024,
        frame: true,
        center: true,
        resizable: true
    });
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('file://' + __dirname + '/app/index.html');
});