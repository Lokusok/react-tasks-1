import { makeAutoObservable, runInAction } from 'mobx';

export default class Products{
	products = [];
	some = 1;
	
	item(id){
		return this.products.find(pr => pr.id == id);
	}

	async load(){
		let response = await fetch('http://faceprog.ru/reactcourseapi/products/all.php');
		let products = await response.json();

		runInAction(() => {
			this.products = products;
			this.some = 2;
		});
	}	

	constructor(rootStore){
		makeAutoObservable(this);
		this.rootStore = rootStore;
	}
}


/*
	proxy 
		action(){
			block render
			
			obj.a = 1
			obj.b = 2
			
			unblock render
		}
*/