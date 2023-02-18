import React, { useEffect, useState } from 'react';
import Introduction from './components/contents/Introduction';
import Hero from './components/Hero';
import TabsItem from './components/TabsItem';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import Definition from './components/contents/Definition';
import Clients from './components/contents/Clients';
import Freelancer from './components/contents/Freelancer';
import SiteVisitors from './components/contents/SiteVisitors';
import UseCollectedInfo from './components/contents/UseCollectedInfo';
import UsePersonalInfo from './components/contents/UsePersonalInfo';
import Unsubscribe from './components/contents/Unsubscribe';
import Children from './components/contents/Children';
import Cookies from './components/contents/Cookies';
import WhereWeStore from './components/contents/WhereWeStore';
import KeepPersonalInfo from './components/contents/KeepPersonalInfo';
import SharePersonalInfo from './components/contents/SharePersonalInfo';

const Landing = () => {
	const [activeTab, setActiveTab] = useState({ id: 1, label: 'Introduction' });
	const [navigationAlign, setNavigationAlign] = useState('end');

	useEffect(() => {
		if (activeTab?.id === 1) {
			setNavigationAlign('end');
		} else if (activeTab?.id === 13) {
			setNavigationAlign('start');
		} else {
			setNavigationAlign('between');
		}
	}, [activeTab]);

	const onTabClick = (id) => {
		const selectedTab = tabs.find((t) => t.id === id);
		setActiveTab(selectedTab);
	};

	const goToPrevTab = () => {
		const prevId = activeTab?.id - 1;
		const prevTab = tabs.find((t) => t.id === prevId);
		setActiveTab(prevTab);
	};

	const goToNextTab = () => {
		const nextId = activeTab?.id + 1;
		const nextTab = tabs.find((t) => t.id === nextId);
		setActiveTab(nextTab);
	};

	const tabs = [
		{ id: 1, label: 'Introduction' },
		{ id: 2, label: 'Definition' },
		{ id: 3, label: 'Freelancers' },
		{ id: 4, label: 'Clients' },
		{ id: 5, label: 'Site Visitors' },
		{ id: 6, label: 'Our Legal Basis for Using Your Personal Information' },
		{ id: 7, label: 'How Do We Use The Information Collected?' },
		{ id: 8, label: 'How Long Do We Keep Personal Information?' },
		{ id: 9, label: 'Children' },
		{ id: 10, label: 'Unsibscribe' },
		{ id: 11, label: 'Sharing Personal Information with Third Parties' },
		{ id: 12, label: 'Where We Store Your Personal Information' },
		{ id: 13, label: 'Coolies' },
	];
	return (
		<>
			<Hero />
			<div className="px-2 px-lg-5">
				<div className="container-xxl row m-0 mx-auto pb-5">
					<div className="col-12 col-lg-4 px-1 px-xl-3 px-xxl-2 mb-5 mb-lg-0">
						<div className="w-100 bg-white py-4 rounded-4">
							{tabs?.map((item) => (
								<TabsItem
									item={item}
									key={item?.id}
									isActive={item?.id === activeTab?.id}
									onClick={onTabClick}
								/>
							))}
						</div>
					</div>
					<div className="col-12 col-lg-8 px-3 px-lg-5">
						{activeTab?.id === 1 ? <Introduction /> : ''}
						{activeTab?.id === 2 ? <Definition /> : ''}
						{activeTab?.id === 3 ? <Freelancer /> : ''}
						{activeTab?.id === 4 ? <Clients /> : ''}
						{activeTab?.id === 5 ? <SiteVisitors /> : ''}
						{activeTab?.id === 6 ? <UsePersonalInfo /> : ''}
						{activeTab?.id === 7 ? <UseCollectedInfo /> : ''}
						{activeTab?.id === 8 ? <KeepPersonalInfo /> : ''}
						{activeTab?.id === 9 ? <Children /> : ''}
						{activeTab?.id === 10 ? <Unsubscribe /> : ''}
						{activeTab?.id === 11 ? <SharePersonalInfo /> : ''}
						{activeTab?.id === 12 ? <WhereWeStore /> : ''}
						{activeTab?.id === 13 ? <Cookies /> : ''}
						<div className={`d-flex justify-content-${navigationAlign} mt-5`}>
							{activeTab?.id === 1 ? (
								' '
							) : (
								<button
									className="bg-transparent border-0 text-green fs-5"
									onClick={goToPrevTab}
								>
									<BsChevronLeft size={18} className="me-2" />
									previous
								</button>
							)}
							{activeTab?.id === 13 ? (
								' '
							) : (
								<button
									className="bg-transparent border-0 text-green fs-5"
									onClick={goToNextTab}
								>
									Next
									<BsChevronRight size={18} className="ms-2" />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
