import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const clearListHandeler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };
  const addItemHandeler = (item) => {
    setItems((items) => [...items, item]);
  };

  const removedItemsHandeler = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const toggleItemHandeler = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packaged: !item.packaged } : item
      )
    );
  };
  return (
    <div>
      <Logo />
      <Form onItemAdd={addItemHandeler} />
      <PackingList
        items={items}
        onDelteItem={removedItemsHandeler}
        onToggleItem={toggleItemHandeler}
        onClearList={clearListHandeler}
      />
      <Stats items={items} />
    </div>
  );
}



export default App;
