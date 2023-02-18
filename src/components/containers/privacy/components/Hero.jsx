import React from 'react';

const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="row m-0">
					<div className="col-12 col-lg-6 position-relative">
						<div className="hero_title position-absolute text-light">
							<h1 className="fw-bold">Privacy & Policy</h1>
							<h3 className="fw-normal">
								Karuf's privacy makes it easy to find information on privacy
								topics, including your choices about how we collect and use your
								information.
							</h3>
						</div>
					</div>
					<div className="col-12 col-lg-6 position-relative">
						<div className="cloud_img position-absolute">
							<img
								alt=""
								src={`${process.env.PUBLIC_URL}/assets/img/cloud.png`}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
