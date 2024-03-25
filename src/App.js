// Learn Quick Start
// https://react.dev/learn

import { useState } from 'react';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

function ClickButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function CountButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function SharingCountButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


export default function MyApp() {
  const [shareCount, setShareCount] = useState(0);

  function handleSharingClick() {
    setShareCount(shareCount + 1);
  }

  return (
    <div>
      <h1>Welcome to my app</h1>

      <h3>Creating and nesting components</h3>
      <MyButton />

      <h3>Rendering lists</h3>
      <ul>{listItems}</ul>

      <h3>Responding to events</h3>
      <ClickButton />

      <h3>Updating the screen</h3>
      <CountButton />
      <CountButton />

      <h3>Sharing data between components</h3>
      <SharingCountButton count={shareCount} onClick={handleSharingClick} />
      <SharingCountButton count={shareCount} onClick={handleSharingClick} />
    </div>
  );
}
