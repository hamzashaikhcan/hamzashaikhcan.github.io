import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { endpoints } from '../utils/BASE_URL';
import axios from 'axios';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		console.log('Sending');
		if (!isEmpty() && validateEmail(email)) {
			const URL = endpoints.CONTACT.ADD.url;
			// alert(URL);
			const body = {
				name: name,
				email: email,
				subject: subject,
				message: message,
			};
			axios
				.post(URL, body)
				.then((resp) => {
					setError('Thanks for contacting us!');
					setName('');
					setEmail('');
					setSubject('');
					setMessage('');
				})
				.catch((err) => {
					setError('Something went wrong');
				});
		} else {
			console.log('Please enter a valid email');
		}
	};

	const onChange = (hook, e) => {
		hook(e.target.value);
	};

	const validateEmail = (email) => {
		const re =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const isEmpty = () => {
		if (name === '' || email === '' || subject === '' || message === '') {
			setError('All fields are required');
			return true;
		} else {
			return false;
		}
	};

	return (
		<div>
			<section className='banner_area'>
				<div className='banner_inner d-flex align-items-center'>
					<div className='container'>
						<div className='banner_content text-center'>
							<h2>Contact</h2>
							<div className='page_link'>
								<Link to='/'>Home</Link>
								<Link to='/contact'>Contact</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='contact_area section_gap'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-3'>
							<div className='contact_info'>
								<div className='info_item'>
									<i className='lnr lnr-phone-handset' />
									<h6>
										<a href='tel:+923058222281'>(+92) 305 8222281</a>
									</h6>
									<p>Contact me at anytime!</p>
								</div>
								<div className='info_item'>
									<i className='lnr lnr-envelope' />
									<h6>
										<a href='mailto:hamzashaikhcan@gmail.com'>
											hamzashaikhcan@gmail.com
										</a>
									</h6>
									<p>Send us your query anytime!</p>
								</div>
							</div>
						</div>
						<div className='col-lg-9'>
							<form
								className='row contact_form'
								action='#'
								method='post'
								id='contactForm'
								noValidate='novalidate'>
								<div className='col-md-6'>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='name'
											name='name'
											value={name}
											onChange={onChange.bind(this, setName)}
											placeholder='Enter your name'
										/>
									</div>
									<div className='form-group'>
										<input
											type='email'
											className='form-control'
											id='email'
											name='email'
											value={email}
											onChange={onChange.bind(this, setEmail)}
											placeholder='Enter email address'
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='subject'
											name='subject'
											value={subject}
											onChange={onChange.bind(this, setSubject)}
											placeholder='Enter Subject'
										/>
									</div>
								</div>
								<div className='col-md-6'>
									<div className='form-group'>
										<textarea
											className='form-control'
											name='message'
											id='message'
											value={message}
											onChange={onChange.bind(this, setMessage)}
											rows={1}
											placeholder='Enter Message'
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='col-md-12 text-right'>
									<button
										type='button'
										value='button'
										onClick={handleSubmit.bind(this)}
										className='primary_btn'>
										<span>Send Message</span>
									</button>
								</div>
								{error}
							</form>
						</div>
					</div>
					<br />
				</div>
			</section>
		</div>
	);
};
export default Contact;
