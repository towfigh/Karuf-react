import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import { RiShoppingCartLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header pb-2 pb-lg-3 pt-3">
			<div className="row m-0 mx-auto container">
				<div className="col-12 col-lg-6 d-flex flex-column flex-md-row justify-content-start align-items-center">
					<div className="logo">
						<img
							alt=""
							src={`${process.env.PUBLIC_URL}/assets/img/logo.webp`}
						/>
					</div>

					<div className="position-relative top_search ms-0 ms-lg-3 mt-3 mt-lg-0">
						<input
							type="text"
							name="Search"
							id="Search"
							placeholder="What service are you looking for today?"
							required="required"
							className="form-control"
						/>
						<button
							type="submit"
							className="border-0 position-absolute search_btn"
							// value={query}
							// onChange={(e) => setQuery(e.target.value)}
						>
							<GoSearch size={24} />
						</button>
					</div>
				</div>
				<div className="col-12 col-lg-1" />
				<div className="col-12 col-lg-5 mt-3 mt-lg-0 d-flex justify-content-around align-items-center">
					<span className="nav_item text-gray mx-2">
						<Link to="/">Explore</Link>
					</span>
					<span className="nav_item text-gray mx-2">
						<NavDropdown
							title={
								<>
									<TfiWorld size={20} className="me-2 d-none d-lg-inline" />
									<TfiWorld size={15} className="me-2 d-lg-none" />
									English
								</>
							}
							id="basic-nav-dropdown"
							className="header_lang_dropdown border-0 px-0 w-100"
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
					</span>
					<span className="nav_item text-gray mx-1 mx-lg-2">
						<Link to="/">Become a seller</Link>
					</span>
					<span className="nav_item text-gray mx-1 mx-lg-2">
						<Link to="/">Sign In</Link>
					</span>
					<span className="nav_item text-gray mx-1 mx-lg-2">
						<Link to="/">Join</Link>
					</span>
					<span className="nav_item text-gray mx-1 mx-lg-2">
						<Link to="/">
							<RiShoppingCartLine size={25} />
						</Link>
					</span>
				</div>
			</div>
			<hr />
			<div className="container position-relative">
				<Navbar expand="lg" collapseOnSelect className="w-100 p-0">
					<Navbar.Toggle aria-controls="basic-navbar-nav" className="p-1" />
					<Navbar.Collapse id="basic-navbar-nav" className="w-100">
						<Nav className="d-flex justify-content-around w-100">
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Programming & Tech</Link>
							</Nav.Link>
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Video & Animation</Link>
							</Nav.Link>
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Graphics & Design</Link>
							</Nav.Link>
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Digital Marketing</Link>
							</Nav.Link>
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Writing & Translation</Link>
							</Nav.Link>
							<Nav.Link
								className="nav-link text-center nav_item text-gray fw-bolder"
								href="/"
							>
								<Link to="/">Business</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
