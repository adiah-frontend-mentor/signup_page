# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Git hub repo](https://github.com/nathanieladiah/signup_page)
- Live Site URL: [Demo](https://nathanieladiah.github.io/signup_page)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Used adobe xd to recreate the styles


### What I learned

I learned to use javascript to validate forms on the client side.

```js
form.addEventListener('submit', event => {
	// Prevent form from automatically submitting
	event.preventDefault();

	validateInputs();
});
```

```js
if(firstName.validity.valueMissing){
  setError(firstName, 'First Name cannot be empty');
} else{
  clearError(firstName);
}
```

```js
const setError = (element, message) => {
	// get the parent div of the input element
	const inputControl = element.parentElement;
	// get the error div of the input control
	const errorDisplay = inputControl.querySelector('.error');

	errorDisplay.innerText = message;
	inputControl.classList.add('error');
}
```
### Useful resources

- [Client Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - 

- [JavaScript Validation](https://dev.to/javascriptacademy/form-validation-using-javascript-34je) - 

## Author

- Website - [Nathaniel Adiah](https://nathanieladiah.github.io)
- Frontend Mentor - [@nathanieladiah](https://www.frontendmentor.io/profile/nathanieladiah)
