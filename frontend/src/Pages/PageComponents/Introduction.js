import React from 'react';
import { DOWNLOAD_URL } from '../../utils/BASE_URL';

const Introduction = () => {
	return (
		<>
			<section className='about_area section_gap'>
				<div className='container'>
					<div className='row justify-content-start align-items-center'>
						<div className='col-lg-5'>
							<div className='about_img'>
								<img className src='./assets/img/about-us.png' alt='' />
							</div>
						</div>
						<div className='offset-lg-1 col-lg-5'>
							<div className='main_title text-left'>
								<h2>
									let’s <br />
									Introduce about <br />
									myself
								</h2>
								<p>
									I am a Software Engineer graduate with a deep interest in core
									development, designs, and technical project management.
								</p>
								<p>
									During my graduation, I have polished my skills related to Web
									Development, Database, and Algorithms design with more than 4
									years of hands-on experience.
								</p>
								<a
									className='primary_btn'
									href={DOWNLOAD_URL + 'Resume - Hamza Zahid.pdf'}
									download
									target='_blank'
									rel='noreferrer'>
									<span>Download CV</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Introduction;
