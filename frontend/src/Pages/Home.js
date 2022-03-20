import React from 'react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_URL } from '../utils/BASE_URL';
import Introduction from './PageComponents/Introduction';
import Newsletter from './PageComponents/Newsletter';
import OfferedServices from './PageComponents/OfferedServices';
import Portfolio from './PageComponents/Portfolio';
import TechStack from './PageComponents/TechStack';
import Testimonial from './PageComponents/Testimonial';

const Home = () => {
	return (
		<div>
			<section className='home_banner_area'>
				<div className='banner_inner'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-7'>
								<div className='banner_content'>
									<h3 className='text-uppercase'>Hell0</h3>
									<h1 className='text-uppercase'>I am Hamza Zahid</h1>
									<h5 className='text-uppercase'>
										Senior Full-stack developer
									</h5>
									<div className='d-flex align-items-center'>
										<Link className='primary_btn' to='/contact'>
											<span>Hire Me</span>
										</Link>
										<a
											className='primary_btn tr-bg'
											href={DOWNLOAD_URL + 'Resume - Hamza Zahid.pdf'}
											download
											target='_blank'
											rel='noreferrer'>
											<span>Get CV</span>
										</a>
									</div>
								</div>
							</div>
							<div className='col-lg-5'>
								<div className='home_right_img'>
									<img
										className
										src='./assets/img/banner/home-right.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Introduction />
			<TechStack />
			<OfferedServices />
			<Portfolio />
			<Testimonial />
			<Newsletter />
		</div>
	);
};

export default Home;
