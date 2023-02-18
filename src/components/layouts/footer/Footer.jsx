import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MdOutlineDarkMode, MdLightMode } from 'react-icons/md';

const Footer = () => {
	return (
		<div className="container mt-5">
			<hr />
			<div className="row">
				<div className="col-6 col-md-3 text-center">
					<Link to="/">COMPANY</Link>
				</div>
				<div className="col-6 col-md-3 text-center">
					<Link to="/">LEGAL</Link>
				</div>
				<div className="col-6 col-md-3 text-center">
					<Link to="/">LINKS</Link>
				</div>
				<div className="col-6 col-md-3 text-center">
					<Link to="/">SUPPORT</Link>
					<div className="mt-5">
						<NavDropdown
							title={
								<>
									<img
										alt=""
										className="flag_icon"
										src={`${process.env.PUBLIC_URL}/assets/img/gb.svg`}
									/>
									English
								</>
							}
							id="basic-nav-dropdown"
							className="footer_lang_dropdown"
						>
							<NavDropdown.Item>
								<img
									alt=""
									className="flag_icon"
									src={`${process.env.PUBLIC_URL}/assets/img/gb.svg`}
								/>
								English
							</NavDropdown.Item>
							<NavDropdown.Item>
								<img
									alt=""
									className="flag_icon"
									src={`${process.env.PUBLIC_URL}/assets/img/ir.svg`}
								/>
								Persian
							</NavDropdown.Item>
							<NavDropdown.Item>
								<img
									alt=""
									className="flag_icon"
									src={`${process.env.PUBLIC_URL}/assets/img/dk.svg`}
								/>
								Danish
							</NavDropdown.Item>
						</NavDropdown>
					</div>
					<div className="mt-3">
						<NavDropdown
							title={
								<>
									<MdOutlineDarkMode size={20} className="me-2" />
									Dark Mode
								</>
							}
							id="basic-nav-dropdown"
							className="footer_lang_dropdown"
						>
							<NavDropdown.Item>
								<MdLightMode size={20} className="me-2" /> Light Mode
							</NavDropdown.Item>
							<NavDropdown.Item>
								<MdOutlineDarkMode size={20} className="me-2" />
								Dark Mode
							</NavDropdown.Item>
						</NavDropdown>
					</div>
				</div>
			</div>
			<div className="text-start my-3">
				<img
					alt=""
					className="footer_logo"
					src={`${process.env.PUBLIC_URL}/assets/img/logo.webp`}
				/>
			</div>
			<div className="text-center mb-3">
				<Link to="/" className="mx-3">
					CONTACT US
				</Link>
				<Link to="/" className="mx-3">
					BLOG
				</Link>
			</div>
		</div>
	);
};

export default Footer;
