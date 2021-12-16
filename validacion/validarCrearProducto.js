export default function validarCrearProducto(valores) {

    let errores = {};

    //validar el nombre del usuario
    if(!valores.nombre) {
        errores.nombre = "El Nombre es obligatorio";
    }

    //validar empresa
    if(!valores.empresa) {
        errores.empresa = "Nombre empresa es obligatoria";
    }

    //validar la url
    if(!valores.url) {
        errores.url = "La url es obligatorio";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = 'URL no valida'
    }

    //validar descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agregar una descripcion"
    }


    return errores;
}