import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer_area'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className='footer_top flex-column'>
							<div className='footer_logo'>
								<Link to='/'>
									<img src='./assets/img/logo.png' alt='' />
								</Link>
								<h4>Follow Me</h4>
							</div>
							<div className='footer_social'>
								<a
									href='https://www.linkedin.com/in/hamza-zahid-01294b140/'
									target='_blank'
									rel='noreferrer'>
									<i className='fa fa-linkedin' />
								</a>
								<a
									href='https://github.com/hamzashaikhcan'
									target='_blank'
									rel='noreferrer'>
									<i className='fa fa-github' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='row footer_bottom justify-content-center'>
					<p className='col-lg-8 col-sm-12 footer-text'>
						Copyright © {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
