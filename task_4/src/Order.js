import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react';
import MyModal from './MyModal';

import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

import SettingsContext from './contexts/settings';


export default function({ onNext, onPrev, setUserData }){
	let settings = useContext(SettingsContext);

	let inputs = [
		{
			id: 'email',
			type: 'email',
			title: 'Email address',
			placeholder: 'name@example.com',
			pattern: /@/,
			inputRef: useRef(0),
			status: useState({
				empty: true,
				isValid: false,
			})
		},

		{
			id: 'name',
			type: 'text',
			title: 'Your name',
			placeholder: 'John Doe',
			pattern: /.{2,}/,
			inputRef: useRef(0),
			status: useState({
				empty: true,
				isValid: false,
			})
		},

		{
			id: 'address',
			type: 'text',
			title: 'Your address',
			placeholder: 'Downing St.',
			pattern: /.{5,}/,
			inputRef: useRef(0),
			status: useState({
				empty: true,
				isValid: false,
			})
		}
	];
	let [ formValid, setFormValid ] = useState(false);
	let [ clickedOnSubmit, setClickedOnSubmit ] = useState(false);
	let [ showModal, setShowModal ] = useState(false);
	inputs.forEach((input) => {
		useEffect(() => {
			setFormValid(inputs.every((input) => input.status[0].isValid === true));
		}, [input.status[0]]);

		useEffect(() => {
			if (formValid) {
				setShowModal(true);

				let email = inputs.find((input) => input.id === 'email').inputRef.current.value.trim();
				let name = inputs.find((input) => input.id === 'name').inputRef.current.value.trim();
				let address = inputs.find((input) => input.id === 'address').inputRef.current.value.trim();

				setUserData({ email, name, address })
			}
		}, [input.status[0]]);
	});
	
	function handleSubmitForm(event) {
		event.preventDefault();
		handleCheckForm();

		setClickedOnSubmit(true);
	}

	function handleCheckForm() {
		inputs.forEach((input) => {
			let [ inputStatus, setInputStatus ] = input.status;
			let inputValue = input.inputRef.current.value.trim();

			if (!input.pattern.test(inputValue)) {
				setInputStatus({ empty: false, isValid: false });
			} else {
				setInputStatus({ empty: false, isValid: true });
			}
		});
	}

	function closeModal() {
		setShowModal(false);
	}

	console.log(!(formValid && clickedOnSubmit && showModal))

	return <div>
		<h1 className={formValid ? 'text-success text-decoration-underline' : 'text-danger'}>Input data</h1>

		<Form id="orderForm" data-bs-theme={settings.theme}>
			{
				inputs.map((input) =>
					<>
						<Form.Group className="mb-3" key={input.id}>
							<Form.Label>{input.title}</Form.Label>
							<Form.Control 
								type={input.type}
								placeholder={input.placeholder}
								ref={input.inputRef}
								onBlur={handleCheckForm}	
							/>
						</Form.Group>

						{
						  (input.status[0].empty === false && input.status[0].isValid === false) 
							&&
							<Alert key={`danger-${input.id}`} variant={'danger'}>
								You have an error in this input.
							</Alert>
						}
					</>
				)
			}
		</Form>

		{			
			<MyModal show={(formValid && clickedOnSubmit && showModal)}
				title="Are you sure the entered data is correct?"
				text="Please carefully check the information you entered."
				cancelText="Check"
				successText="Sure"
				onClose={closeModal}
				onSuccess={onNext}
			/>
		}

		<hr/>
		<button type="button" className="btn btn-warning me-2" onClick={onPrev}>Back to cart</button>
		<button type="submit" form="orderForm" className="btn btn-primary" onClick={handleSubmitForm}>Move to result</button>
	</div>;
}