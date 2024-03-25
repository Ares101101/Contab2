import { app, shell, BrowserWindow, ipcMain, dialog } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
const axios = require('axios')
const cheerio = require('cheerio')
const https = require('https')
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 800,
    minHeight: 470,
    show: false,
    frame: false,
    icon: icon,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.setMenuBarVisibility(false)
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  ipcMain.on('show-dialog', (event, args) => {
    dialog.showMessageBox(args)
  })

  ipcMain.on('create-window', () => {
    const newWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: false
      }
    })
    newWindow.loadURL(
      'https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx'
    )
  })
  ipcMain.handle('obtener-informacion', async (event, url) => {
    try {
      // Si no se proporciona una URL, usa una URL predeterminada
      if (!url) {
        url =
          'https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx'
      }
      const httpsAgent = new https.Agent({
        rejectUnauthorized: false
      })

      const axiosInstance = axios.create({
        httpsAgent
      })

      const response = await axiosInstance.get(url)
      const html = response.data
      const $ = cheerio.load(html)
      const datosTipoCambio = []

      $('#ctl00_cphContent_rgTipoCambio_ctl00__0').each((i, el) => {
        // Encuentra todos los elementos td dentro del tr
        $(el)
          .find('td')
          .each((index, td) => {
            // Obtén el texto dentro de cada td y conviértelo a número
            const texto = $(td).text().trim()
            const numero = parseFloat(texto)
            // Verifica si es un número válido y agrégalo al array
            if (!isNaN(numero)) {
              datosTipoCambio.push(numero)
            }
          })
      })

      // Envía los datos al proceso de renderizado
      console.log(datosTipoCambio)
      return datosTipoCambio
    } catch (error) {
      console.error('Error al obtener la información:', error)
      // Envía un mensaje de error al proceso de renderizado si ocurre un error
      event.sender.invoke('error-obteniendo-informacion', error.message)
    }
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
