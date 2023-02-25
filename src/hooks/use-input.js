// Custom Hook for Name and Email Inputs (optional)

import { useState } from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

      const inputBlurHandler = (event) => {
        setIsTouched(true);
      };

      const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
      };
    
    return {
        value: enteredValue, 
        hasError, 
        valueChangeHandler, 
        inputBlurHandler,
        reset
    };
};

export default useInput;

// for SimpleInput.js for name input
// const {
//     value: enteredName,
//     isValid: enteredNameIsValid,
//     hasError: nameInputHasError,
//     valueChangeHandler: nameChangedHandler,
//     inputBlurHandler: nameBlurHandler,
//     reset: resetNameInput
// } = useInput(value => value.trim() !== '');

// for SimpleInput.js for email input
// const {
//     value: enteredEmail,
//     isValid: enteredEmailIsValid,
//     hasError: emailInputHasError,
//     valueChangeHandler: emailChangedHandler,
//     inputBlurHandler: emailBlurHandler,
//     reset: resetEmailInput
// } = useInput(value => value.includes('@'));