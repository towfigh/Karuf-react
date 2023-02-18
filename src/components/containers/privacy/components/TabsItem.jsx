import React from 'react';

const TabsItem = ({ item, isActive, onClick }) => {
	return (
		<button
			className={
				!isActive
					? 'privacy_tab_btn text-gray py-3 ps-4 d-block text-start m-auto'
					: 'active privacy_tab_btn text-gray py-3 ps-4 d-block text-start m-auto'
			}
			onClick={() => onClick(item?.id)}
		>
			{item?.label}
		</button>
	);
};

export default TabsItem;
