import React, { Component } from 'react';
import { Button, Input, Required } from '../Utils/Utils';
import regUsersService from '../../services/Reg-users-service';
export default class RegistrationForm extends Component {
	static defaultProps = {
		onRegistrationSuccess: () => {}
	};

	state = { error: null };

	handleSubmit = (ev) => {
		ev.preventDefault();
		const { fullName, nickName, userName, password } = ev.target;
		const users = {
			fullName: fullName.value,
			nickName: nickName.value,
			userName: userName.value,
			password: password.value
		};
		regUsersService.postRegInfo(users);
		console.log('registration form submitted');
		console.log({ fullName, nickName, userName, password });

		fullName.value = '';
		nickName.value = '';
		userName.value = '';
		password.value = '';
		this.props.onRegistrationSuccess();
	};

	render() {
		const { error } = this.state;
		return (
			<form className="RegistrationForm" onSubmit={this.handleSubmit}>
				<div role="alert">{error && <p className="red">{error}</p>}</div>
				<div className="full_name">
					<label htmlFor="RegistrationForm__full_name">
						Full name <Required />
					</label>
					<Input name="fullName" type="text" required id="RegistrationForm__full_name" />
				</div>
				<div className="user_name">
					<label htmlFor="RegistrationForm__user_name">
						User name <Required />
					</label>
					<Input name="userName" type="text" required id="RegistrationForm__user_name" />
				</div>
				<div className="password">
					<label htmlFor="RegistrationForm__password">
						Password <Required />
					</label>
					<Input name="password" type="password" required id="RegistrationForm__password" />
				</div>
				<div className="nick_name">
					<label htmlFor="RegistrationForm__nick_name">Nickname</label>
					<Input name="nickName" type="text" required id="RegistrationForm__nick_name" />
				</div>
				<Button type="submit">Register</Button>
			</form>
		);
	}
}
