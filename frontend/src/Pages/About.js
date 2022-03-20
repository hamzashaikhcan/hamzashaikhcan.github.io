import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from './PageComponents/Introduction';
import Newsletter from './PageComponents/Newsletter';
import OfferedServices from './PageComponents/OfferedServices';
import Testimonial from './PageComponents/Testimonial';

const About = () => {
	return (
		<>
			<section class='banner_area'>
				<div class='banner_inner d-flex align-items-center'>
					<div class='container'>
						<div class='banner_content text-center'>
							<h2>About Us</h2>
							<div class='page_link'>
								<Link to='/'>Home</Link>
								<Link to='/about'>About</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Introduction />
			<OfferedServices />
			<Testimonial />
			<Newsletter />
		</>
	);
};
export default About;
