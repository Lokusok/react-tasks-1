import { makeAutoObservable } from 'mobx';

export default class Order{
	form = [
		{ name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/ },
		{ name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,12}.+$/ },
		{ name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/ }
	]

	get formValid(){
		return this.form.every(f => f.valid);
	}

	get data(){
		let res = {};
		
		this.form.forEach(field => {
			res[field.name] = field.value;
		});

		return res;
	}

	update = (name, value) => {
		let field = this.form.find(f => f.name == name);

		if(field !== undefined){
			field.value = value.trim();
			field.valid = field.pattern.test(field.value);
		}
	}

	send(){
		// fetch, ajax
		/* 
			let form = {
				...data,
				cart: this.rootStore.cart.products
			}

			fetch('/api/order/, {
				method: 'POST',
				body: form
			})
		*/
	}

	constructor(rootStore){
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}