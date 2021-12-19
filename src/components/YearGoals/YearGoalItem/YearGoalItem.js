import React, { useState } from 'react';

import './YearGoalItem.css';

const YearGoalItem = props => {
  // const [deleteText, setDeleteText] = useState(' ');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default YearGoalItem;
