import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
	const loggedIn = {
		firstName: 'Joseph',
		lastName: 'Praise',
		email: 'praisejosephalimi@gmail.com',
	};
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account andtransactions efficiently.'
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={12050.5}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 123.5 }, { currentBalance: 457.8 }]}
			/>
		</section>
	);
};

export default Home;
