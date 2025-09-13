// array utilizada como lista
const shoppingList = [
    {item: "", cantidad: 0, comprado: false}
];

// funcion para añadir objetos al array creado
function addItem(item, quantity){
    shoppingList.push({item: item, cantidad: quantity, comprado: false});
}

// funcion para eliminar un objeto de la lista mediante su posicion
function removeItem(id){
    shoppingList.splice(id);
}