import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";



function App() {
  return <div>
    <div>
      <Header/>
    </div>
    <div className="flex grid grid-cols-3 col-span-2">
      <CategoryList/>
      <ProductList/>
    </div>
  </div>;
}

export default App;
