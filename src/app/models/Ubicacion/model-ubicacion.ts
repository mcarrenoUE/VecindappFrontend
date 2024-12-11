export class ModelUbicacion {
    direccion: string;
    barrio: string;
    localidad: string;
    ciudad: string;

    constructor(direccion: string, barrio: string, localidad: string, ciudad: string) {
        this.direccion = direccion;
        this.barrio = barrio;
        this.localidad = localidad;
        this.ciudad = ciudad;
    }
}
