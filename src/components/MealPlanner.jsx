import React from 'react';

export default function MealPlanner({ daysOfWeek, mealTypes, currentWeek, weekPlans, updateMeal }) {
  return (
    <div className="meal-planner">
      {daysOfWeek.map(day => (
        <div key={day} className="day-column">
          <div className="day-header">{day}</div>
          {mealTypes.map(meal => (
            <div key={meal.key} className="meal-section">
              <div className="meal-title">{meal.icon} {meal.name}</div>
              <textarea
                className={`meal-input ${weekPlans[currentWeek]?.[day]?.[meal.key] ? 'filled' : ''}`}
                placeholder={`Kliknij, aby dodać ${meal.name.toLowerCase()}...`}
                value={weekPlans[currentWeek]?.[day]?.[meal.key] || ''}
                onChange={(e) => updateMeal(day, meal.key, e.target.value)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}