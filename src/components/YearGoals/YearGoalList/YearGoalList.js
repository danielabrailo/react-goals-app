import React from 'react';

import YearGoalItem from '../YearGoalItem/YearGoalItem';
import './YearGoalList.css';

const YearGoalList = props => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <YearGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </YearGoalItem>
      ))}
    </ul>
  );
};

export default YearGoalList;
