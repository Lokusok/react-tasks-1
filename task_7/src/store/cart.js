import { makeAutoObservable, runInAction } from 'mobx';

// tmp
const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default class Cart{
	items = [];
	#token = null;
	status = {
		adding: false,
		removing: false,
	}
	
	get itemsDetailed(){
		return this.items.map(item => {
			let details = this.rootStore.products.item(item.id);
			return { ...details, ...item };
		})
	}

	get total(){
		return this.itemsDetailed.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
	}

	inCart(id){
		return this.items.some(item => item.id == id);
	}

	change = (id, cnt) => {
		let item = this.items.find(item => item.id == id);

		if(item !== undefined){
			let detailts = this.itemsDetailed.find(item => item.id == id);
			item.cnt = Math.max(1, Math.min(detailts.rest, cnt));

			fetch(`${BASEURL}change.php?token=${this.#token}&id=${item.id}&cnt=${item.cnt}`)
		}
	}

	clean = () => {
		this.items = [];
		return fetch(`${BASEURL}clean.php?token=${this.#token}`);
	}

	add = async (id) => {
		if (this.status.adding) {
			return;
		}
		
		if(!this.inCart(id)){
			this.status.adding = true;

			let response = await fetch(`${BASEURL}add.php?token=${this.#token}&id=${id}`);
			let res = await response.json();

			if(res){
				this.items.push({ id, cnt: 1 });
			}

			this.status.adding = false;
		}
	}

	remove = async (id) => {
		if (this.status.removing) {
			return;
		}

		
		if(this.inCart(id)){
			this.status.removing = true;
			
			let response = await fetch(`${BASEURL}remove.php?token=${this.#token}&id=${id}`);
			let res = await response.json();
			
			if(res){
				this.items = this.items.filter(item => item.id != id);
			}

			this.status.removing = false;
		}
	}

	load = async () => {
		let curToken = this.rootStore.storage.getItem('CART__TOKEN');
		let response = await fetch(`${BASEURL}load.php?token=${curToken}`);
		let { cart, token, needUpdate } = await response.json();

		if(needUpdate){
			this.rootStore.storage.setItem('CART__TOKEN', token);
		}

		runInAction(() => {
			this.items = cart; 
			this.#token = token;
		});
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