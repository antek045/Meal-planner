export default function ShoppingList() {
  const shoppingCategories = {
    'Warzywa i owoce': ['Pomidory', 'Ogórki', 'Sałata'],
    'Mięso i ryby': ['Kurczak', 'Łosoś', 'Jajka'],
    'Zboża i strączkowe': ['Quinoa', 'Owsianka'],
    'Inne': ['Oliwa', 'Orzechy']
  };

  return (
    <div className="shopping-list">
      <h3>📋 Lista zakupów</h3>
      <div className="shopping-items">
        {Object.keys(shoppingCategories).map(cat => (
          <div key={cat} className="shopping-category">
            <h4>{cat}</h4>
            <ul>{shoppingCategories[cat].map(item => <li key={item}>• {item}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  );
}