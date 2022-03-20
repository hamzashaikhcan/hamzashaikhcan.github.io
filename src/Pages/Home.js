import React from 'react';
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
									<h5 className='text-uppercase'>senior wordpress developer</h5>
									<div className='d-flex align-items-center'>
										<a className='primary_btn' href='contact.html'>
											<span>Hire Me</span>
										</a>
										<a className='primary_btn tr-bg' href='#'>
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
