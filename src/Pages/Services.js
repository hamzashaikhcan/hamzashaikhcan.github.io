import React from 'react';
import { Link } from 'react-router-dom';
import Introduction from './PageComponents/Introduction';
import Newsletter from './PageComponents/Newsletter';
import OfferedServices from './PageComponents/OfferedServices';
import Testimonial from './PageComponents/Testimonial';

const Services = () => {
	return (
		<>
			<section class='banner_area'>
				<div class='banner_inner d-flex align-items-center'>
					<div class='container'>
						<div class='banner_content text-center'>
							<h2>My Services</h2>
							<div class='page_link'>
								<Link to='/'>Home</Link>
								<Link to='/services'>My Service</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<br />

			<OfferedServices />
			<Testimonial />
			<Newsletter />
		</>
	);
};
export default Services;
