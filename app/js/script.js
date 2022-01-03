const form = document.getElementById('register');

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', event => {
	// Prevent form from automatically submitting
	event.preventDefault();

	validateInputs();
});

// Change this to an if statement?

const setError = (element, message) => {
	// get the parent div of the input element
	const inputControl = element.parentElement;
	// get the error div of the input control
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
}

const clearError = element => {
	// get the parent div of the input element
	const inputControl = element.parentElement;
	// get the error div of the input control
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = '';
	inputControl.classList.remove('error');
}


// TODO: try a foreach for each input element
const validateInputs = () => {

	if(firstName.validity.valueMissing){
		setError(firstName, 'First Name cannot be empty');
	} else{
		clearError(firstName);
	}

	if(lastName.validity.valueMissing){
		setError(lastName, 'Last Name cannot be empty');
	} else {
		clearError(lastName);
	}

	// email validations:
	if(email.validity.valueMissing){
		// if the field is empty
		setError(email, 'Email cannot be empty');
	} else if(email.validity.typeMismatch){
		// if the field doesn't contain an email address
		email.value = "email@example/com";
		setError(email, 'Looks like this is not an email');
	} else {
		clearError(email);
	}

	// Password validations:
	if(password.validity.valueMissing){
		setError(password, 'Password cannot be empty');
	} else {
		clearError(password);
	}
}