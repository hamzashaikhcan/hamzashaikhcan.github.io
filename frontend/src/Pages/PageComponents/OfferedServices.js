import React from 'react';

const OfferedServices = () => {
	const [height, width] = ['100px', '110px'];
	return (
		<>
			<section className='features_area'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-lg-8 text-center'>
							<div className='main_title'>
								<h2>Service offers</h2>
								<p></p>
							</div>
						</div>
					</div>
					<div className='row feature_inner'>
						<div className='col-lg-3 col-md-6'>
							<div className='feature_item'>
								<img
									src='./assets/img/services/web_app.png'
									alt=''
									style={{ width: width, height: height }}
								/>
								<h4>Web App Development</h4>
								<p>
									Creeping for female light years that lesser can't evening
									heaven isn't bearing tree
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='feature_item'>
								<img
									src='./assets/img/services/uiux.png'
									alt=''
									style={{ width: width, height: height }}
								/>
								<h4>UI/UX design</h4>
								<p>
									Creeping for female light years that lesser can't evening
									heaven isn't bearing tree
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='feature_item'>
								<img
									src='./assets/img/services/cloud.png'
									alt=''
									style={{ width: width, height: height }}
								/>
								<h4>Cloud App Development</h4>
								<p>
									Creeping for female light years that lesser can't evening
									heaven isn't bearing tree
								</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-6'>
							<div className='feature_item'>
								<img
									src='./assets/img/services/mob.png'
									alt=''
									style={{ width: width, height: height }}
								/>
								<h4>Mobile App Development</h4>
								<p>
									Creeping for female light years that lesser can't evening
									heaven isn't bearing tree
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default OfferedServices;
