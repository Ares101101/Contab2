import NavAlmacen from '../components/navAlmacen'
import NavFacturacion from '../components/navFacturacion'
import NavGraficos from '../components/navGraficos'
import NavRegistros from '../components/navRegistros'
import Cargamasivadeinventario from '../pages/cargamasivadeinventario'
import ConfiguracionDeImpuestos from '../pages/configuraciondeimpuestos'
import Facturacion from '../pages/facturacion'
import GestionDeClientes from '../pages/gestiondeclientes'
import GestionDeInventario from '../pages/gestiondeinventario'
import GraficoDeRendimiento from '../pages/graficoderendimiento'
import GraficoVentasPorPeriodo from '../pages/graficoperiodo'
import GraficoProductosVendidos from '../pages/graficoproductos'
import GraficoRentabilidad from '../pages/graficorentabilidad'
import GraficoTendencias from '../pages/graficotendencias'
import HistorialDeComprobante from '../pages/historialdecomprobantes'
import IntegracionDeCodigoDeBarras from '../pages/integraciondecodigodebarras'
import GestionDeLotes from '../pages/lotesyseries'
import IMetodosDePago from '../pages/metodosdepago'
import NotaDeCredito from '../pages/notadecredito'
import RegistroAnual from '../pages/registroanual'
import RegistroClientes from '../pages/registroclientes'
import RegistroComparativo from '../pages/registrocomparativo'
import RegistroDiario from '../pages/registrodiario'
import RegistroElectronico from '../pages/registroelectronico'
import RegistroMensual from '../pages/registromensual'
import ReportesDeInventario from '../pages/reportesdeinventario'

// #region Navs
export const componentMap = [
  NavFacturacion,
  NavAlmacen,
  NavRegistros,
  NavGraficos
]

// #region latouts

export const layout1 = [
  <Facturacion key={0} />,
  <NotaDeCredito key={1} />,
  <HistorialDeComprobante key={2} />,
  <ConfiguracionDeImpuestos key={3} />,
  <IMetodosDePago key={4} />,
  <GestionDeClientes key={5} />
]
export const layout2 = [
  <GestionDeInventario key={0} />,
  <ReportesDeInventario key={1} />,
  <GestionDeLotes key={2} />,
  <IntegracionDeCodigoDeBarras key={3} />,
  <Cargamasivadeinventario key={4} />
]
export const layout3 = [
  <RegistroDiario key={0} />,
  <RegistroMensual key={1} />,
  <RegistroAnual key={2} />,
  <RegistroComparativo key={3} />,
  <RegistroElectronico key={4} />,
  <RegistroClientes key={5} />
]
export const layout4 = [
  <GraficoVentasPorPeriodo key={0} />,
  <GraficoProductosVendidos key={1} />,
  <GraficoDeRendimiento key={2} />,
  <GraficoRentabilidad key={3} />,
  <GraficoTendencias key={4} />
]

export const pestañas = [
  'Facturacion',
  'Almacen',
  'Registros',
  'Graficos'
]

// #region navs

export const navFacturacion = [
  'Emitir comprobante de venta',
  'Emitir nota de credito',
  'Historoal de comprobantes',
  'Configuracion de impuestos',
  'Integracion de metodos de pagos',
  'Gestion de clientes'
]

export const navAlmacen = [
  'Gestión de inventario',
  'Reportes de inventario',
  'Gestión de lotes y números de serie',
  'Integración con escáner de códigos de barras',
  'Carga masiva de inventario'
]

export const navRegistros = [
  'Registro de ventas diario',
  'Registro de ventas mensual',
  'Registro de ventas anual',
  'Comparativa de registros ',
  'Registro de libro Electronico de ventas',
  'Registro de clientes '
]
export const navGraficos = [
  'Ventas por período',
  'Informe de productos vendidos',
  'Comparación de rendimiento',
  'Análisis de rentabilidad',
  'Tendencias de precios',
  'Proyeccion de ventas'
]
