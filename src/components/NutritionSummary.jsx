export default function NutritionSummary({ weekPlans, currentWeek, daysOfWeek, mealTypes }) {
  const weekPlan = weekPlans[currentWeek] || {};
  let totalMeals = 0, filledMeals = 0, uniqueIngredients = new Set();

  daysOfWeek.forEach(day => {
    if (weekPlan[day]) {
      mealTypes.forEach(meal => {
        totalMeals++;
        if (weekPlan[day][meal.key]) {
          filledMeals++;
          weekPlan[day][meal.key].split(' ').forEach(word => {
            if (word.length > 3) uniqueIngredients.add(word.toLowerCase());
          });
        }
      });
    }
  });

  const completionRate = totalMeals > 0 ? Math.round((filledMeals / (daysOfWeek.length * mealTypes.length)) * 100) : 0;
  const varietyScore = Math.min(100, uniqueIngredients.size * 5);
  const healthScore = Math.min(100, (filledMeals * 10) + (varietyScore * 0.5));

  return (
    <div className="nutrition-summary">
      <h3>Podsumowanie tygodniowe</h3>
      <div className="nutrition-grid">
        <div className="nutrition-item"><span className="nutrition-value">{filledMeals}</span><span className="nutrition-label">Zaplanowane posiłki</span></div>
        <div className="nutrition-item"><span className="nutrition-value">{varietyScore}%</span><span className="nutrition-label">Różnorodność</span></div>
        <div className="nutrition-item"><span className="nutrition-value">{healthScore}%</span><span className="nutrition-label">Ocena zdrowotna</span></div>
        <div className="nutrition-item"><span className="nutrition-value">{completionRate}%</span><span className="nutrition-label">Wypełnienie planu</span></div>
      </div>
    </div>
  );
}