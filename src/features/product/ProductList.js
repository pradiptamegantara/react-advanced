import ProductCard from "./ProductCard";

const ProductsList = (props) => {
    return (
        <div>
            <div>
                <div>
                    <h2>Products</h2>
                </div>
            </div>
            <div>
                {props.data.map((p) => <ProductCard key={p.productId} product={p}/>)}
            </div>
        </div>
    )
}

export default ProductsList;
