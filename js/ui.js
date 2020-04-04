class Interfaz {   

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerDatosApi()
            .then(monedas =>{
                
                const select = document.querySelector('#criptomoneda');
                for (const [key, value] of Object.entries(monedas.json.Data)){
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                }
            })   
    }


    mostrarMensaje(mensaje, clase){
        const div = document.createElement('div');
        div.className = clase
        div.appendChild(document.createTextNode(mensaje));
        
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);

    }


    imprimirResultadoCotizacion(resultado, divisa, criptodivisa){
        //datos moneda
        const datosMoneda = resultado[criptodivisa][divisa];
        //construir template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda 
                    ${datosMoneda.TOSYMBOL} es de $: ${datosMoneda.PRICE}
                </div>
            </div>
        `;
        document.querySelector('#resultado').innerHTML=templateHTML;
    }
}