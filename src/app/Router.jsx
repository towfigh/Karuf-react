import React, { Fragment } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Footer from '../components/layouts/footer/Footer';
import Header from '../components/layouts/header/Header';
import Privacy from '../components/containers/privacy/Privacy';
import About from '../components/containers/about/About';
import ContactUs from '../components/containers/contact/ContactUs';
import Terms from '../components/containers/terms/Terms';

const Router = () => {
	return (
		<>
			<Header />
			<main>
				<div>
					<Routes>
						<Route
							exact
							path="/policy"
							element={
								<div className="bg-gray">
									<Outlet />
								</div>
							}
						>
							<Route exact path="/policy" element={<Privacy />} />
						</Route>

						<Route
							exact
							path="/"
							element={
								<div className="bg-gray">
									<Outlet />
								</div>
							}
						>
							<Route exact path="/" element={<Terms />} />
						</Route>

						<Route path="/about" element={<About />} />
						<Route path="/contact-us" element={<ContactUs />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Router;
