import './App.css';
import { useState } from 'react';

function App() {
	const [values, setValues] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [showError, setShowError] = useState({
		name: 'false',
		email: 'false',
		phone: 'false',
	});

	const [isValid, setIsValid] = useState({
		name: 'false',
		email: 'false',
		phone: 'false',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const resetForm = () => {
		setValues({
			name: '',
			email: '',
			phone: '',
		});

		setShowError({
			name: 'false',
			email: 'false',
			phone: 'false',
		});

		setIsValid({
			name: 'false',
			email: 'false',
			phone: 'false',
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		console.log(values);

		resetForm();

		setTimeout(() => {
			setIsSubmitting(false);
		}, 5000);
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });

		if (e.target.checkValidity())
			setIsValid({ ...isValid, [e.target.name]: 'true' });

		console.log(isValid);
	};

	const handleFocus = (e) => {
		setShowError({ ...showError, [e.target.name]: 'true' });
	};

	const handleReset = (e) => {
		resetForm();
		e.target.blur();
	};

	return (
		<>
			<div className='app'>
				<form onSubmit={handleSubmit}>
					<div className='input-container'>
						<h2 className='title'>Grant's Input Form</h2>
						<div className='input'>
							<img src='/name-icon.png' alt='Name icon' width='20px'></img>
							<input
								name='name'
								type='text'
								placeholder='Name'
								value={values.name}
								onChange={handleChange}
								required={true}
								pattern='^[A-Za-z]{3,16}$'
								onBlur={handleFocus}
								focused={showError.name.toString()}></input>
							<span className='errorMessage'>Please enter 3-16 letters.</span>
						</div>

						<div className='input'>
							<img src='/email-icon.png' alt='Email icon' width='18px'></img>
							<input
								name='email'
								type='email'
								placeholder='Email'
								value={values.email}
								onChange={handleChange}
								required={true}
								pattern='/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\. [A-Z]{2,}$/i'
								onBlur={handleFocus}
								focused={showError.email.toString()}></input>
							<span className='errorMessage'>Please enter a valid email.</span>
						</div>

						<div className='input'>
							<img src='/phone-icon.png' alt='Phone icon' width='18px'></img>
							<input
								name='phone'
								type='tel'
								placeholder='Phone'
								value={values.phone}
								onChange={handleChange}
								required={true}
								pattern='[0-9]{3}-?[0-9]{3}-?[0-9]{4}'
								onBlur={handleFocus}
								focused={showError.phone.toString()}></input>
							<span className='errorMessage'>
								Please enter a 10 digit phone number.
							</span>
						</div>

						<div className='buttons'>
							<button className='reset' type='button' onClick={handleReset}>
								Reset
							</button>
							<button
								className='submit'
								type='submit'
								disabled={
									isValid.name === 'false' ||
									isValid.email === 'false' ||
									isValid.phone === 'false'
								}>
								Submit
							</button>
						</div>
						<span>
							{isSubmitting && (
								<div className='submitMessage'>Successfully submitted!</div>
							)}
						</span>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
