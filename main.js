/*
 * @Author: Lienren 
 * @Date: 2017-10-09 20:31:40 
 * @Last Modified by: Lienren
 * @Last Modified time: 2017-10-12 09:48:48
 */
'use strict';

const {
    app,
    BrowserWindow
} = require('electron')
const path = require('path')
const url = require('url')

var mainWindow = null;

app.once('ready', function () {
    mainWindow = new BrowserWindow({
        height: 768,
        width: 1024,
        frame: true,
        center: true,
        resizable: true
    });
    // mainWindow.webContents.openDevTools();
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:',
        slashes: true
    }));
});