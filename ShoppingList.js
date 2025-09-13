const shoppingList = [
    {item: "", cantidad: 0, comprado: false}
];

function addItem(item, quantity){
    shoppingList.push({item: item, cantidad: quantity});
}