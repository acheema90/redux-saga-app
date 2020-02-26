import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import {
	getUsersRequest,
	createUserRequest,
	deleteUserRequest,
	usersError
} from '../store/actions/users';
import NewUserForm from './NewUserForm';
import UserList from './UserList';

const App = ({ users, getUsersRequest, createUserRequest, deleteUserRequest, usersError }) => {
	useEffect(() => {
		getUsersRequest();
	}, []);

	const handleCreateUserSubmit = ({ firstName, lastName }) => {
		createUserRequest({
			firstName,
			lastName
		});
	};

	const handleDeleteUserClick = userId => {
		deleteUserRequest(userId);
	};

	const handleCloseAlert = () => {
		usersError({
			error: ''
		});
	};
	return (
		<div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
			<h2>Users</h2>
			<Alert color="danger" isOpen={users.error} toggle={handleCloseAlert}>
				{users.error}
			</Alert>
			<NewUserForm onSubmit={handleCreateUserSubmit} />
			{users.items && users.items.length && (
				<UserList onDeleteUserClick={handleDeleteUserClick} users={users.items} />
			)}
		</div>
	);
};

export default connect(({ users }) => ({ users }), {
	getUsersRequest,
	createUserRequest,
	deleteUserRequest,
	usersError
})(App);
