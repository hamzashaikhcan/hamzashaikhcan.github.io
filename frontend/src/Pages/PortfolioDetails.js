import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../utils/BASE_URL';

const PortfolioDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState({});

	useEffect(() => {
		const URL = BASE_URL + '/portfolio/' + id;
		axios
			.get(URL)
			.then((res) => {
				setData(res.data);
			})
			.catch((err) => {
				alert(err);
			});
	}, []);

	return (
		<>
			<section class='banner_area'>
				<div class='banner_inner d-flex align-items-center'>
					<div class='container'>
						<div class='banner_content text-center'>
							<h2>Portfolio Details</h2>
							<div class='page_link'>
								<Link to='/'>Home</Link>
								<Link to='/portfolio'>Portfolio</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='portfolio_details_area section_gap'>
				<div className='container'>
					<div className='portfolio_details_inner'>
						<div className='row'>
							<div className='col-lg-6'>
								<div className='left_img'>
									<img
										className='img-fluid'
										src={data.image}
										alt={data.title}
									/>
								</div>
							</div>
							<div className='offset-lg-1 col-lg-5'>
								<div className='portfolio_right_text mt-30'>
									<h4 className='text-uppercase'>{data.title}</h4>

									<ul className='list'>
										<li>
											<span>Website</span>: {data.link}
										</li>
										<li>
											<span>Completed</span>: {data.completed_at}
										</li>
										<li>
											<span>Tags</span>: {data.tags}
										</li>
									</ul>
								</div>
							</div>
						</div>
						<p>{data.description}</p>
					</div>
				</div>
			</section>
			<br />
		</>
	);
};

export default PortfolioDetails;
