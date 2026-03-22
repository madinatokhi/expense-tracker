function ExpenseList({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.title} - ${item.amount}
          <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;