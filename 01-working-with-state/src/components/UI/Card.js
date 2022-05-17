import React from 'react'; // Technically we don't need this import but this is how it was done in the past.
import './Card.css';

const Card = props => {
    const classes = 'card ' + props.className;
    return <div  className={classes}>{props.children}</div>;
}

export default Card;