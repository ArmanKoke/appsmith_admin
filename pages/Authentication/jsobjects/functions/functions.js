export default {

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

	createToken: async (user) => {		
		return jsonwebtoken.sign(user, 'secret', {expiresIn: 60*60});
	},

	signIn: async () => {
		// const password = inp_password.text;

		const [user] = await findUserByLogin.run();

		if (user && user.id !== 0) {
			storeValue('token', await this.createToken(user))
				.then(() => navigateTo('Home'))
		} else {
			return showAlert('Invalid login/password combination', 'error');
		}
	},
}