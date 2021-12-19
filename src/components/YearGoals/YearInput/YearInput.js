import React, { useState } from 'react';
import styles from './YearInput.module.css';
import Button from '../../UI/Button/Button';


const YearInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const yearInputChangeHandler = event => {
    if (event.target.value.trim().length === 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div classname={`${styles['form-control']} ${!isValid && styles.invalid}`} >
        <label>New Year Goal</label> <br/>
        <input type="text" onChange={yearInputChangeHandler} />
        </div> <br/>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default YearInput;
