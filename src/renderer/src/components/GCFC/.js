POST https://www.sbs.gob.pe/app/stats/seriesH_TC-CV-Historico.asp
Content-Type: application/x-www-form-urlencoded

FECHA_CONSULTA_1=01%2F01%2F2024&FECHA_CONSULTA_2=29%2F02%2F2024&s_moneda=02&button22=Consultar

const axios = require('axios')
const cheerio = require('cheerio')

// URL de la página que deseas obtener
const url = 'https://www.sbs.gob.pe/app/pp/sistip_portal/paginas/publicacion/tipocambiopromedio.aspx'

// Realizar la solicitud HTTP
axios.get(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const datosTipoCambio = []
    $('#ctl00_cphContent_rgTipoCambio_ctl00__0').each((i, el) => {
      // Encuentra todos los elementos td dentro del tr
      $(el).find('td').each((index, td) => {
        // Obtén el texto dentro de cada td y conviértelo a número
        const texto = $(td).text().trim()
        const numero = parseFloat(texto)
        // Verifica si es un número válido y agrégalo al array
        if (!isNaN(numero)) {
          datosTipoCambio.push(numero)
        }
      })
    })
    // Encuentra y extrae los elementos con los datos que necesitas

    // Imprimir los datos obtenidos
    console.log('Datos de tipo de cambio:', datosTipoCambio)
  })
  .catch(error => {
    console.log('Error al obtener los datos:', error)
  })
