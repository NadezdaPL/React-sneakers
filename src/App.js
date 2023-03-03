
import Drawer from './components/Drawer';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <div className="page clear">
      
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
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;