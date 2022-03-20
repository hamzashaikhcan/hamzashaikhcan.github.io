import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../utils/BASE_URL';

const Portfolio = () => {
	const [data, setDate] = useState([]);

	useEffect(() => {
		const URL = BASE_URL + '/portfolio/';
		axios
			.get(URL)
			.then((res) => {
				setDate(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<section className='portfolio_area' id='portfolio'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='main_title text-left'>
								<h2>
									quality work <br />
									Recently done project
								</h2>
							</div>
						</div>
					</div>

					<div className='row portfolio-grid justify-content-center'>
						{data.map((item) => (
							<div className='col-lg-4 col-md-6 all latest'>
								<div className='portfolio_box'>
									<div className='single_portfolio'>
										<img
											className='img-fluid w-100'
											src={item.image}
											alt={item.title}
										/>
										<div className='overlay' />
										<Link to={`/detail/${item.id}`} className='img-gal'>
											<div className='icon'>
												<span className='lnr lnr-cross' />
											</div>
										</Link>
									</div>
									<div className='short_info'>
										<h4>
											<a href='portfolio-details.html'>{item.title}</a>
										</h4>
										<p>{item.tags}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
export default Portfolio;
