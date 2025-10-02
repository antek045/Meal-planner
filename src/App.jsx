import React, { useState } from 'react';
import Header from './components/Header.jsx';
import WeekNavigation from './components/WeekNavigation.jsx';
import MealPlanner from './components/MealPlanner.jsx';
import QuickAdd from './components/QuickAdd.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import NutritionSummary from './components/NutritionSummary.jsx';
import ShoppingList from './components/ShoppingList.jsx';
import RecipeModal from './components/RecipeModal.jsx';
import { daysOfWeek, mealTypes, recipes } from './data/recipes.js';

export default function App() {
  const [currentWeek, setCurrentWeek] = useState(0);
  const [weekPlans, setWeekPlans] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMealType, setCurrentMealType] = useState('');
  const [shoppingVisible, setShoppingVisible] = useState(false);

  const updateMeal = (day, mealType, value) => {
    setWeekPlans(prev => {
      const newPlans = { ...prev };
      if (!newPlans[currentWeek]) newPlans[currentWeek] = {};
      if (!newPlans[currentWeek][day]) newPlans[currentWeek][day] = {};
      newPlans[currentWeek][day][mealType] = value;
      return { ...newPlans };
    });
  };

  const changeWeek = (offset) => {
    setCurrentWeek(currentWeek + offset);
  };

  const clearWeek = () => {
    if (window.confirm('Czy na pewno chcesz wyczyścić plan tego tygodnia?')) {
      setWeekPlans(prev => {
        const newPlans = { ...prev };
        delete newPlans[currentWeek];
        return newPlans;
      });
    }
  };

  const generateShoppingList = () => {
    if (!weekPlans[currentWeek]) {
      alert('Najpierw zaplanuj posiłki na ten tydzień!');
      return;
    }
    setShoppingVisible(true);
  };

  const saveWeekPlan = () => {
    alert('✅ Plan tygodnia został zapisany!');
  };

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <WeekNavigation currentWeek={currentWeek} changeWeek={changeWeek} />
        <MealPlanner
          daysOfWeek={daysOfWeek}
          mealTypes={mealTypes}
          currentWeek={currentWeek}
          weekPlans={weekPlans}
          updateMeal={updateMeal}
        />
        <QuickAdd openModal={(type) => { setCurrentMealType(type); setModalOpen(true); }} />
        <ActionButtons
          generateShoppingList={generateShoppingList}
          clearWeek={clearWeek}
          saveWeekPlan={saveWeekPlan}
        />
        <NutritionSummary
          weekPlans={weekPlans}
          currentWeek={currentWeek}
          daysOfWeek={daysOfWeek}
          mealTypes={mealTypes}
        />
        {shoppingVisible && <ShoppingList />}
      </div>
      {modalOpen && (
        <RecipeModal
          mealType={currentMealType}
          recipes={recipes}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}