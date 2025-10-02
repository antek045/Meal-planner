export default function RecipeModal({ mealType, recipes, closeModal }) {
  return (
    <div className="recipe-modal" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={closeModal}>&times;</button>
        <h3>Wybierz przepis</h3>
        <ul className="recipe-list">
          {recipes[mealType]?.map(recipe => (
            <li key={recipe} className="recipe-item" onClick={() => alert(`Wybrano: ${recipe}`)}>
              {recipe}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}