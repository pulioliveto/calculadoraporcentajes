
// const formulaDescuento = precio * (100 - descuento) / 100;


function descuentoPrecio(precio, descuento){
    const formulaDescuento = precio * (100 - descuento) / 100;
    return formulaDescuento;
}
descuentoPrecio();


function calculaDescuento(){
    const inputOriginal = document.getElementById('precio-original');
    const inputDescuento = document.getElementById('precio-descuento');
    const valueOriginal = inputOriginal.value;
    const valueDescuento = inputDescuento.value;
    const descuentazo = descuentoPrecio(valueOriginal, valueDescuento);
    const precioOriginal = document.getElementById('prf-precio-original');
    const precioResultado = document.getElementById('prf-resultado');
    if(valueOriginal <= 0 || valueDescuento <= 0){
        precioResultado.innerText = 'Debes colocar un numero válido'
    }else{
        precioOriginal.innerText = `Precio original: $${valueOriginal}`;
        precioResultado.innerText = `El precio con un descuento de ${valueDescuento}% es: $${descuentazo}`;
    }
    
}


