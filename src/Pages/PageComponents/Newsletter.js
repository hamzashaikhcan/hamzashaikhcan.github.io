import React from 'react';

const Newsletter = () => {
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
										/>
										<div style={{ position: 'absolute', left: '-5000px' }}>
											<input
												name='b_36c4fd991d266f23781ded980_aefe40901a'
												tabIndex={-1}
												defaultValue
												type='text'
											/>
										</div>
										<button className='primary-btn hover d-inline'>
											Get Started
										</button>
										<div className='info' />
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
