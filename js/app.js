const cotizador = new API('9d874bd608813461025de8caa2e89aae1a9630b7d016a9a8f3a9341292d12e97');
const ui = new Interfaz();
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const campoDivisa = document.querySelector('#moneda');
    const divisa = campoDivisa.options[campoDivisa.selectedIndex].value;

    const campoCripto = document.querySelector('#criptomoneda');
    const criptomoneda = campoCripto.options[campoCripto.selectedIndex].value;

    if(divisa === "" || criptomoneda === ""){
        ui.mostrarMensaje("AMBOS CAMPOS SON OBLIGATRIO", 'alert bg-danger text-center');
    }else{
        cotizador.obtenerValores(divisa,criptomoneda)
            .then(data =>{
                ui.imprimirResultadoCotizacion(data.resultado.RAW, divisa, criptomoneda);
            });
    }

    
    
})