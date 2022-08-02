import ProductList from "./features/product/ProductList";
import data from './product.json';
import Search from "./component/Search";

function App() {
    const ProductListSearch = Search(ProductList, data)
    return (
        <>
            <ProductListSearch/>
        </>
    );
}

export default App;
