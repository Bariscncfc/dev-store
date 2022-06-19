import CategoryList from "./components/CategoryList";
import Header from "./components/Header";
import ProductList from "./components/ProductList";



function App() {
  let categoryInfo = {title:"Kategoriler"}
  let productInfo = {title:"Ürünler"}
  return <div>
    <div>
      <Header/>
    </div>
    <div className="flex grid grid-cols-3 col-span-2">
      <CategoryList info={categoryInfo}/>
      <ProductList info={productInfo}/>
    </div>
  </div>;
}

export default App;
