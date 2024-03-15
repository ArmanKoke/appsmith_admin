export default {	
	reLogin: async () => {
		showAlert("Re-login please")
		
		navigateTo("Authentication");
	},

	signIn: async () => {
		const password = inp_password.text;

		try {
			const [user] = await findUserByLogin.run()

			if (user && user.id !== 0 && password.length !== 0) {
				navigateTo('Accounts');
				
				// setTimeout(await this.reLogin(), 5000)
			} else {
				return showAlert('Invalid login/password combination', 'error');
			}
		} catch(err) {
			showAlert('Internal error', 'error');

			console.log(err);
		}
	},
}