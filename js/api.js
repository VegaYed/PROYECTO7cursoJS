class API{
    constructor(apikey){
        this.apikey = apikey;
    }
    async obtenerDatosApi(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        //FETCH A LA API         
        const urlObtener = await fetch(url);
        //RESPUESTA EN JSON
        const json = await urlObtener.json();
        return {
            json
        }
    }

    async obtenerValores(divisa, criptodivisa){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptodivisa}&tsyms=${divisa}&api_key=${this.apikey}`;
        const urlConvertir = await fetch(url);
        const  resultado = await urlConvertir.json();
        return {resultado};
    }
}