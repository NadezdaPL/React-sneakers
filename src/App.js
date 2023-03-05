import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    image: ('images/sneakers/1.jpg'),
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h2>Sneakers</h2>
          <div className="search d-flex">
            <img src="/images/search.svg" alt="Seach" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} image={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
