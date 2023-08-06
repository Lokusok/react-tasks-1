import React, { useState, useContext } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { observer } from 'mobx-react-lite';

import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import Order from './views/Order';
import Result from './views/Result';
import E404 from './views/E404';

import Total from './components/Total';


export default observer(function(){
	function setClassName({ isActive, isPending }) {
		return isActive ? 'active' : 'default';
	}

	return <>
		<header>
			<div className="container mt-1">
				<div className="row justify-content-between">
					<div className="col">
						Logo
					</div>
					<div className="col">
						<Total />
					</div>
				</div>
				<hr/>
			</div>
		</header>
		<div>
			<div className="container">
				<div className="row">
					<aside className="col col-3">
						<ul className="list-group">
							<li className="list-group-item">
								<NavLink
									to="/"
									className={setClassName}
									>Home</NavLink>
							</li>
							<li className="list-group-item">
								<NavLink
									to="/cart"
									className={setClassName}
									>Cart</NavLink>
							</li>
							<li className="list-group-item">
								<NavLink
									to="/order"
									className={setClassName}
									>Order</NavLink>
							</li>
						</ul>
						
					</aside>
					<main className="col col-9">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/product/:id" element={<Product />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/order" element={<Order />} />
							<Route path="/result" element={<Result />} />
							<Route path="*" element={<E404 />} />
						</Routes>
					</main>
				</div>
			</div>
		</div>
		<footer className="mt-1">
			<hr/>
			<div className="container">2022</div>
		</footer>
	</>
});

