import Cargamasivadeinventario from "../pages/cargamasivadeinventario"
import ConfiguracionDeImpuestos from "../pages/configuraciondeimpuestos"
import Facturacion from "../pages/facturacion"
import GestionDeClientes from "../pages/gestiondeclientes"
import GestionDeInventario from "../pages/gestiondeinventario"
import GraficoDeRendimiento from "../pages/graficoderendimiento"
import GraficoVentasPorPeriodo from "../pages/graficoperiodo"
import GraficoProductosVendidos from "../pages/graficoproductos"
import GraficoRentabilidad from "../pages/graficorentabilidad"
import GraficoTendencias from "../pages/graficotendencias"
import HistorialDeComprobante from "../pages/historialdecomprobantes"
import IntegracionDeCodigoDeBarras from "../pages/integraciondecodigodebarras"
import GestionDeLotes from "../pages/lotesyseries"
import IMetodosDePago from "../pages/metodosdepago"
import NotaDeCredito from "../pages/notadecredito"
import RegistroAnual from "../pages/registroanual"
import RegistroClientes from "../pages/registroclientes"
import RegistroComparativo from "../pages/registrocomparativo"
import RegistroDiario from "../pages/registrodiario"
import RegistroElectronico from "../pages/registroelectronico"
import RegistroMensual from "../pages/registromensual"
import ReportesDeInventario from "../pages/reportesdeinventario"

//#region latouts

export const layout1 = [
    <Facturacion />,
    <NotaDeCredito/>,
    <HistorialDeComprobante/>,
    <ConfiguracionDeImpuestos/>,
    <IMetodosDePago/>,
    <GestionDeClientes/>,
]
export const layout2 = [
    <GestionDeInventario/>,
    <ReportesDeInventario/>,
    <GestionDeLotes/>,
    <IntegracionDeCodigoDeBarras/>,
    <Cargamasivadeinventario/>,
]
export const layout3 = [
    <RegistroDiario/>,
    <RegistroMensual/>,
    <RegistroAnual/>,
    <RegistroComparativo/>,
    <RegistroElectronico/>,
    <RegistroClientes/>,
]
export const layout4 = [
    <GraficoVentasPorPeriodo/>,
    <GraficoProductosVendidos/>,
    <GraficoDeRendimiento/>,
    <GraficoRentabilidad/>,
    <GraficoTendencias/>,
]

export const pestañas = [
    "Facturacion",
    "Almacen",
    "Registros",
    "Graficos",
]

//#region navs

export const navFacturacion =[
    "Emitir comprobante de venta",
    "Emitir nota de credito",
    "Historoal de comprobantes",
    "Configuracion de impuestos",
    "Integracion de metodos de pagos",
    "Gestion de clientes"
]

export const navAlmacen =[
    "Gestión de inventario",
    "Reportes de inventario",
    "Gestión de lotes y números de serie",
    "Integración con escáner de códigos de barras",
    "Carga masiva de inventario",
]

export const navRegistros =[
    "Registro de ventas diario",
    "Registro de ventas mensual",
    "Registro de ventas anual",
    "Comparativa de registros ",
    "Registro de libro Electronico de ventas",
    "Registro de clientes ",
]
export const navGraficos =[
    "Ventas por período",
    "Informe de productos vendidos",
    "Comparación de rendimiento",
    "Análisis de rentabilidad",
    "Tendencias de precios",
    "Proyeccion de ventas",
]
