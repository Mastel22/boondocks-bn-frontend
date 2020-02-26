/* eslint-disable react/no-array-index-key */
import { Link } from 'react-router-dom';
import React from 'react';
import { accountLinks } from '../utils/userAccountLinks';
import Logout from './auth/Logout';

/**
 * UserAccount
 * @returns {*}
 * @constructor
 */
const UserAccount = () => {
	const { role } = JSON.parse(localStorage.getItem('bn_user_data'));
	return (
		<li
			data-testid='user-account'
			className='nav-item user-account mx-0 mx-md-3 active'
		>
			<div
				className='nav-link dropdown-toggle'
				data-toggle='dropdown'
				role='button'
				aria-haspopup='true'
				aria-expanded='false'
			>
				<span>Account</span>
				<div className='user-avatar'>{localStorage.name_initials}</div>
			</div>
			<div className='dropdown-menu'>
				{[...accountLinks.general, ...accountLinks[role]].map((item, idx) => (
					<Link key={idx} className='dropdown-item' to={item.linkRoute}>
						{item.linkText}
					</Link>
				))}
				<Logout />
			</div>
		</li>
	);
};

export default UserAccount;
