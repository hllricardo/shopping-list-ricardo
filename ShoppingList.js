// array utilizada como lista
const shoppingList = [
    {item: "manzana", cantidad: 5, comprado: true}
];

// funcion para añadir objetos al array creado
function addItem(item, quantity){
    if (quantity > 0) {
        shoppingList.push({item: item, cantidad: quantity, comprado: false});
    }
}

// funcion para eliminar un objeto de la lista mediante su posicion
function removeItem(index){
    shoppingList.splice(index);
}

// funcion para modificar los objetos dentro del array
function updateItem(index, newItem, newQuantity){
    if (quantity > 0) {
        shoppingList[index].item = newItem;
        shoppingList[index].cantidad = newQuantity;
    }
}

console.table(shoppingList);