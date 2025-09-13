// array utilizada como lista
const shoppingList = [
    {item: "", cantidad: 0, comprado: false}
];

// funcion para añadir objetos al array creado
function addItem(item, quantity){
    shoppingList.push({item: item, cantidad: quantity, comprado: false});
}

// funcion para eliminar un objeto de la lista mediante su posicion
function removeItem(index){
    shoppingList.splice(index);
}

// funcion para modificar los objetos dentro del array
function updateItem(index, newItem, newQuantity){

}