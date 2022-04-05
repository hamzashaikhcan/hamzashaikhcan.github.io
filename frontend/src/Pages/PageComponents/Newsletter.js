import React, { useState } from 'react';
import axios from 'axios';
import { endpoints } from '../../utils/BASE_URL';

const Newsletter = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateEmail(email)) {
			const URL = endpoints.NEWSLETTER.ADD.url;
			// alert(URL);
			const body = {
				email: email,
			};
			axios
				.post(URL, body)
				.then((resp) => {
					setError('Thanks for subscribing!');
					// alert(resp.data);
				})
				.catch((err) => {
					setError('Email already exists');
				});
		} else {
			console.log('Please enter a valid email');
		}
	};

	const onChange = (e) => {
		setEmail(e.target.value);
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<>
			<section className='newsletter_area'>
				<div className='container'>
					<div className='row justify-content-center align-items-center'>
						<div className='col-lg-12'>
							<div className='subscription_box text-center'>
								<h2 className='text-uppercase text-white'>
									get update from anywhere
								</h2>
								<p className='text-white'>
									Bearing Void gathering light light his eavening unto dont
									afraid.
								</p>
								<div className='subcribe-form' id='mc_embed_signup'>
									<form
										target='_blank'
										noValidate='true'
										action='https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01'
										method='get'
										className='subscription relative'>
										<input
											name='EMAIL'
											placeholder='Email address'
											onfocus="this.placeholder = ''"
											onblur="this.placeholder = 'Email address'"
											required
											type='email'
											onChange={onChange.bind(this)}
										/>

										<button
											className='primary-btn hover d-inline'
											onClick={handleSubmit.bind(this)}>
											Get Started
										</button>
										<div className='error' style={{ color: 'lightred' }}>
											{error}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Newsletter;
