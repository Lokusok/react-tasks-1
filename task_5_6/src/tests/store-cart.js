import { Cart } from './../store/cart'

let cartStore = new Cart();

console.log(cartStore.total === 54000);
cartStore.remove(100);
console.log(cartStore.total === 54000);
console.log(cartStore.total);

cartStore.change(101, 10);
console.log(cartStore.total);