export default function QuickAdd({ openModal }) {
  return (
    <div className="quick-add-section">
      <div className="quick-add-title">Szybkie dodawanie przepisów</div>
      <div className="recipe-categories">
        <div className="category-card" onClick={() => openModal('breakfast')}>
          <h3>🍳 Śniadania</h3>
          <p>Zdrowe i energetyzujące</p>
        </div>
        <div className="category-card" onClick={() => openModal('lunch')}>
          <h3>🥙 Obiady</h3>
          <p>Sycące i zbilansowane</p>
        </div>
        <div className="category-card" onClick={() => openModal('dinner')}>
          <h3>🍽️ Kolacje</h3>
          <p>Lekkie i pożywne</p>
        </div>
        <div className="category-card" onClick={() => openModal('snacks')}>
          <h3>🥨 Przekąski</h3>
          <p>Między posiłkami</p>
        </div>
      </div>
    </div>
  );
}