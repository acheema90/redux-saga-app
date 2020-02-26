import React from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../store/actions/users';

const App = ({ getUsersRequest }) => {
	getUsersRequest();
	return <div>test</div>;
};

export default connect(null, {
	getUsersRequest
})(App);
