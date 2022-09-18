import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formHidden, setFormHidden] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    const dateParts = event.target.value.split("-");
    setEnteredAmount(dateParts[0], dateParts[1] + 1, dateParts[2]);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // Handle date issue
  const dateString = enteredDate;
  const dateParts = dateString.split("-");
  const aDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  const submitHandler = (event) => {
    event.preventDefault();

    setFormHidden(true);

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: aDate,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const showForm = () => {
    setFormHidden(false);
  }

  const hideForm = () => {
    setFormHidden(true);
  }

  const expenseButton = <button onClick={showForm}>Add Expense</button>

  const expenseForm = <form onSubmit={submitHandler}>
  <div className="new-expense__controls">
    <div className="new-expense__control">
      <label>Title</label>
      <input
        type="text"
        value={enteredTitle}
        onChange={titleChangeHandler}
      />
    </div>
    <div className="new-expense__control">
      <label>Amount</label>
      <input
        type="number"
        value={enteredAmount}
        min="0.01"
        step="0.01"
        onChange={amountChangeHandler}
      />
    </div>
    <div className="new-expense__control">
      <label>Date</label>
      <input
        type="date"
        value={enteredDate}
        min="2019-01-01"
        max="2022-12-31"
        onChange={dateChangeHandler}
      />
    </div>
  </div>
  <div className="new-expense__actions">
    <button onClick={hideForm}>Cancel</button>
    <button type="submit">Add Expense</button>
  </div>
</form>

  return (
    <>
      { formHidden ? expenseButton : expenseForm };
    </>
  );
};

export default ExpenseForm;
