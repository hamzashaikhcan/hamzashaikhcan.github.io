import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className='header_area'>
				<div className='main_menu'>
					<nav className='navbar navbar-expand-lg navbar-light'>
						<div className='container'>
							{/* Brand and toggle get grouped for better mobile display */}
							<Link className='navbar-brand logo_h' to='/'>
								<img src='./assets/img/logo.png' alt='' />
							</Link>
							<button
								className='navbar-toggler'
								type='button'
								data-toggle='collapse'
								data-target='#navbarSupportedContent'
								aria-controls='navbarSupportedContent'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='icon-bar' />
								<span className='icon-bar' />
								<span className='icon-bar' />
							</button>
							{/* Collect the nav links, forms, and other content for toggling */}
							<div
								className='collapse navbar-collapse offset'
								id='navbarSupportedContent'>
								<ul className='nav navbar-nav menu_nav justify-content-end'>
									<li className='nav-item'>
										<Link className='nav-link' to='/'>
											Home
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' to='/about'>
											About
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' to='/services'>
											Services
										</Link>
									</li>
									<li className='nav-item'>
										<Link className='nav-link' to='/portfolio'>
											Portfolio
										</Link>
									</li>

									<li className='nav-item'>
										<Link className='nav-link' to='/contact'>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};
export default Header;
