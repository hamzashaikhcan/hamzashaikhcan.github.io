import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
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
											placeholder='Enter your name'
										/>
									</div>
									<div className='form-group'>
										<input
											type='email'
											className='form-control'
											id='email'
											name='email'
											placeholder='Enter email address'
										/>
									</div>
									<div className='form-group'>
										<input
											type='text'
											className='form-control'
											id='subject'
											name='subject'
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
											rows={1}
											placeholder='Enter Message'
											defaultValue={''}
										/>
									</div>
								</div>
								<div className='col-md-12 text-right'>
									<button type='button' value='submit' className='primary_btn'>
										<span>Send Message</span>
									</button>
								</div>
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
