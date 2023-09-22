function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <div>
          <em>Start adding some items to your packing list 🚀</em>
        </div>
      </p>
    );
  }

  const NumItems = items.length;
  const PackedItems = items.filter((item) => item.packaged).length;
  const Percentage = Math.round((PackedItems / NumItems) * 100);
  return (
    <footer className="stats">
      <em>
        {Percentage === 100
          ? "You got everything! Ready to go! ✈️ "
          : `you have ${NumItems} item in your bag and you already packed ${PackedItems} (${Percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
