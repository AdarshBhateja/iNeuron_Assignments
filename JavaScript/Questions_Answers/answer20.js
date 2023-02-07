const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// adding in front
shoppingCart.splice(0,0,'Meat');
console.log(shoppingCart);

//adding at end
shoppingCart.push('Sugar');
console.log(shoppingCart);

// removing element
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modifying element
shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);

