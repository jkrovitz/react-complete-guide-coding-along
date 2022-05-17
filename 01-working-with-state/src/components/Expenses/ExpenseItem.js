import React from 'react'; // Technically we don't need this import but this is how it was done in the past.
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {

  const clickHandler = () => {
      console.log('Clicked!');
  };
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2> {/* trying to make output of props.title change when button is clicked */}
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
