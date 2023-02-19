import React from 'react';
import ContactCard from './components/ContactCard';
import { FiSmartphone, FiMail } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const ContactUs = () => {
	return (
		<div className="">
			<div className="contact_hero">
				<div className="row m-0">
					<div className="col-12 col-lg-6 position-relative">
						<div className="contact_hero_title position-absolute text-light">
							<h1 className="fw-bold">Contact Us</h1>
							<h3 className="fw-normal">
								Got any questions?
								<br /> Don't hesitate to get in touch.
							</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="row mx-auto container text-center">
				<div className="col-12 col-sm-6 col-lg-3 mt-3">
					<a href="tel:+601129114461" rel="noreferrer">
						<ContactCard label="Call Us" description="+60 1129114461">
							<FiSmartphone size={25} />
						</ContactCard>
					</a>
				</div>
				<div className="col-12 col-sm-6 col-lg-3 mt-3">
					<a
						href="https://goo.gl/maps/KSBeWih74SyBbQvq6"
						target="_blank"
						rel="noreferrer"
					>
						<ContactCard
							label="Visit Us"
							description="A-14-03 AMPANG BOULEVARD, AMPANG, SELANGOR, MALAYSIAN"
						>
							<SlLocationPin size={25} />
						</ContactCard>
					</a>
				</div>
				<div className="col-12 col-sm-6 col-lg-3 mt-3">
					<a href="mailto:info@karuf.com" rel="noreferrer">
						<ContactCard label="Mail Us" description="info@karuf.com">
							<FiMail size={25} />
						</ContactCard>
					</a>
				</div>
				<div className="col-12 col-sm-6 col-lg-3 mt-3">
					<a href="/" target="_blank" rel="noreferrer">
						<ContactCard label="Live Chat" description="Chat with Us 24/7">
							<TfiHeadphoneAlt size={25} />
						</ContactCard>
					</a>
				</div>
			</div>
			<div className="my-5 container text-center">
				<h4> Let's Talk !</h4>
				<p className="text-muted">
					To know more about our work or process feel free to get in touch.
				</p>
			</div>
			<div className="row mx-auto pt-3 container">
				<div className="col-12 col-lg-6 p-2 p-lg-5">
					<h1>
						Looking for <span className="text-green">DS</span> for your project?
					</h1>
					<p className="text-muted">
						We think contact pages should be friendly. After all, youre
						encouraging users to get in touch with you, so why make it an
						intimidating scenario? Yummygum has one of the best contact us pages
						for friendliness check out the multiple choices that visitors have
						when it comes to contact forms. The split page design lets people
						locate the business on a map on one side, and pick a reason to
						contact them on the other.Yummygum has one of the best contact us
						pages for friendliness check out the multiple choices that visitors
						have when it comes to contact forms. The split page design lets
						people locate the business on a map on one side, and pick a reason
						to contact them on the other.
					</p>
					<hr className="w-75 mx-auto mb-4" />
					<div className="text-center text-lg-end">
						<Link to="/search" className="btn_outline_green">
							Search DS <AiOutlineArrowRight className="ms-2" />
						</Link>
					</div>
				</div>
				<div className="col-12 col-lg-6 bg-gray p-2 py-5 p-lg-5 mt-5 mt-lg-0 rounded">
					<h3 className="text-center text-lg-start">Ready to get started ?</h3>
					<form className="mt-5">
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control"
								id="Name-contact"
								placeholder="Enter your Name address"
							/>
							<label for="Name-contact" className="text-muted">
								Name
							</label>
						</div>
						<div class="form-floating mb-3">
							<input
								type="email"
								class="form-control"
								id="email-contact"
								placeholder="Enter your Email address"
							/>
							<label for="email-contact" className="text-muted">
								Email address
							</label>
						</div>
						<div class="form-floating">
							<textarea
								class="form-control textarea_contact"
								placeholder="Leave your Message here"
								id="message-contact"
							></textarea>
							<label for="message-contact" className="text-muted">
								Message
							</label>
						</div>
						<div className="text-center text-lg-start mt-4">
							<button type="submit" className="btn_green">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="parallax mt-5 mb-3 text-center text-light d-flex align-items-center flex-column justify-content-center">
				<h1>Have a Project ?</h1>
				<h3>We would love to help</h3>
				<button
					type="button"
					className="bg-light px-5 py-1 mt-3 rounded-3 fw-bold border-0"
				>
					Call Us
				</button>
			</div>

			<div className="py-5 text-center">
				<h5 className="mb-4">Find us in Map</h5>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6017.020167264201!2d28.9806366!3d41.0578416!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAzJzI3LjYiTiAyOMKwNTgnMzguMyJF!5e0!3m2!1sen!2str!4v1676772061050!5m2!1sen!2str"
					allowfullscreen
					loading="lazy"
					title="map"
					className="contact_map"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	);
};

export default ContactUs;
