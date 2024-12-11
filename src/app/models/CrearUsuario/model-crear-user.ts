import { ModelCliente } from "../Cliente/model-cliente";
import { ModelUbicacion } from "../Ubicacion/model-ubicacion";


export class ModelCrearUser {
    cliente:ModelCliente;
    ubicacion:ModelUbicacion;

    constructor(cliente:ModelCliente, ubicacion:ModelUbicacion){
        this.cliente=cliente;
        this.ubicacion=ubicacion;
    }
}
