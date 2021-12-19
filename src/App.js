import React, { useState } from 'react';

import YearGoalList from './components/YearGoals/YearGoalList/YearGoalList';
import YearInput from './components/YearGoals/YearInput/YearInput';
import './App.css';

const App = () => {
  const [yearGoals, setYearGoals] = useState([
    { text: 'Learn Go!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setYearGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setYearGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (yearGoals.length > 0) {
    content = (
      <YearGoalList items={yearGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <YearInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
