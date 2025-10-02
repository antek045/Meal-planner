export default function ActionButtons({ generateShoppingList, clearWeek, saveWeekPlan }) {
  return (
    <div className="action-buttons">
      <button className="btn" onClick={generateShoppingList}>📝 Generuj listę zakupów</button>
      <button className="btn secondary" onClick={clearWeek}>🗑️ Wyczyść tydzień</button>
      <button className="btn" onClick={saveWeekPlan}>💾 Zapisz plan</button>
    </div>
  );
}