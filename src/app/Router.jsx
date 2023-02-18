import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from '../components/layouts/footer/Footer';
import Header from '../components/layouts/header/Header';
import Privacy from '../components/containers/privacy/Privacy';
import About from '../components/containers/about/About';

const Router = () => {
	return (
		<>
			<Header />
			<main>
				<div>
					<Routes>
						<Route exact path="/" element={<Privacy />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Router;
