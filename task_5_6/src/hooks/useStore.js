import { useContext } from 'react';
import StoreContext from './../contexts/store'

export default function(...list){
	let stores = useContext(StoreContext);
	return list.map(name => stores[name]);
}