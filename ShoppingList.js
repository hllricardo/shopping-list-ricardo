// array utilizada como lista
const shoppingList = [
    {item: "manzana", cantidad: 5, comprado: false},
    {item: "platanos", cantidad :8, comprado: false}
];

// funcion para añadir objetos al array creado
function addItem(newItem, newQuantity){
    for (i = 0; i < shoppingList.length; i++){
        if (newItem == shoppingList[i].item) {
            return;
        }
    }

    if (newQuantity > 0) {
        shoppingList.push({item: newItem, cantidad: newQuantity, comprado: false});
    }
}

// funcion para eliminar un objeto de la lista mediante su posicion
function removeItem(index){
    shoppingList.splice(index, 1);
}

// funcion para modificar los objetos dentro del array
function updateItem(index, newItem, newQuantity){
    for (i = 0; i < shoppingList.length; i++){
        if (newItem == shoppingList[index].item) {
            return;
        }
    }
    

    if (newQuantity > 0) {
        shoppingList[index].item = newItem;
        shoppingList[index].cantidad = newQuantity;
    }
}

// funcion a modo de "interfaz" para moverse por la aplicacion y llamar diferenctes funciones para realizar operaciones
function interface(){
    const bucle = true;
    while(bucle){
        let opcion = prompt("¿Que quieres hacer? Añadir = 1, Eliminar = 2, Modificar = 3, Salir = 4");

        let item = undefined;
        let quantity = undefined;
        let index = undefined;

        switch (opcion){
            case "1":
                item = prompt("Introduce el producto que vas a añadir");
                quantity = prompt("Introduce la cantidad");
                parseInt(quantity, 10);
                addItem(item,quantity);
                break;
            case "2":
                index = prompt("Introduce el index del producto a eliminar");
                parseInt(index);
                removeItem(index);
                break;
            case "3":
                index = prompt("Introduce el index del producto a modificar");
                item = prompt("Introduce el nuevo producto");
                quantity = prompt("Introduce la cantidad");
                parseInt(quantity, 10);
                updateItem(index, item, quantity);
                break;
            case "4":
                alert("Saliendo de la aplicacion");
                bucle = false;
                break;
            default:
                alert("No se ha introducido una opcion valida");
        }
        console.clear();
        console.table(shoppingList);
    }
}


interface();



