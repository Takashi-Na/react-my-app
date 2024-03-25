// Learn Quick Start
// https://react.dev/learn

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


export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>

      <h3>Creating and nesting components</h3>
      <MyButton />

      <h3>Rendering lists</h3>
      <ul>{listItems}</ul>
    </div>


  );
}
