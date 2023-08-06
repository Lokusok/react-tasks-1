import { makeAutoObservable } from 'mobx';

export default class Cart{
	items = [
	];
	
	get total(){
		return {
			price: this.items.reduce((acc, product) => acc + product.price * product.cnt, 0),
			size: this.items.reduce((acc, product) => acc + product.cnt, 0),
		};
	}

	inCart(id){
		return this.items.some(item => item.id == id);
	}

	change = (id, cnt) => {
		let product = this.items.find(pr => pr.id == id);

		if (product !== undefined){
			product.cnt = Math.max(1, Math.min(product.rest, cnt));
		}
	}

	remove = (id) => {
		this.items = this.items.filter(pr => pr.id != id);
	}

	add = (id) => {
		const product = this.rootStore.products.getProductById(id);

		if (!product) {
			return;
		}

		product.cnt = 1;

		if (this.inCart(product)) {
			console.log('Уже имеется')
		}

		this.items.push(product);
	}

	constructor(rootStore){
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}

/*
	get inCart(){
		return id => this.items.some(item => item.id == id);
	}
*/

/* products
	id_product
	title
	...

carts
	id_cart
	id_user (null)
	token (null)

products_carts
	id_cart     
	id_product
	cnt

	1 2 3
	1 10 1
	2 2 1 */