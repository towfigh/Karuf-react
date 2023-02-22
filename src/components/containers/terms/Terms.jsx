import React from 'react';
import conditions from './components/conditions';
import Hero from './components/Hero';

const Terms = () => {
	return (
		<>
			<Hero />
			<div className="container pb-5">
				<div className="terms_holder bg-white border rounded-3 pt-5 p-1 p-lg-5">
					<div className="terms_header text-center">
						<img
							alt=""
							src={`${process.env.PUBLIC_URL}/assets/img/terms.jpg`}
							className="mb-4"
						/>
						<h2 className="fw-bolder pb-2 pb-lg-5">
							<span className="text-green">Karuf's</span>{' '}
							<span>Terms Of Services</span>
						</h2>
						<div className="container terms_letter px-2 px-sm-3 px-md-4 px-lg-5 mt-5">
							<p align="justify" className="text-gray-darke">
								{conditions}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Terms;
