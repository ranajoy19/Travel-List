function Item({ item, onDelteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packaged}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packaged ? { textDecoration: "line-Through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item