import React from 'react';

const ContactCard = ({ children, label, description }) => {
	return (
		<div className="contact_card pt-5 pb-3 px-2 h-100">
			<div className="pb-3">{children}</div>
			<h6 className="fw-bolder">{label}</h6>
			<p className="text-muted">{description}</p>
		</div>
	);
};

export default ContactCard;
