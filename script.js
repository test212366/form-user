let user = {
	male: 'off',
	female: 'off',
	other: 'off'
}

const name = document.getElementById('name'),
	email = document.getElementById('email'),
	password = document.getElementById('password'),
	male = document.getElementById('male'),
	female = document.getElementById('female'),
	other = document.getElementById('other'),
	burtday = document.getElementById('bithday'),
	rules = document.getElementById('rules'),
	submit = document.getElementById('submit'),
	form = document.getElementById('form')


form.addEventListener('submit', checkUserInfo)


function checkUserInfo(event) {
	event.preventDefault()
	user = {
		name: name.value,
		email: email.value,
		password: password.value,
		male: male.value,
		female: female.value,
		other: other.value,
		birthday: burtday.value,
		rules: rules.value,
		submit: submit.value

	}
	console.log(user);
}
