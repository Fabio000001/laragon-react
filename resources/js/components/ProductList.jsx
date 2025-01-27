const ProductList = (props) => {
    const { products, navData, Pagination } = props;
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>Product: {product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
            <div className="bg-black text-white mt-6">
                <button onClick={() => Pagination(navData.prev)}>Previous</button>
                <button onClick={() => Pagination(navData.next)}>Next</button>
            </div>
        </div>
    );
}

export default ProductList;