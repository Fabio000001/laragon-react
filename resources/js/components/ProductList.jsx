const ProductList = ({ products }) => {
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
        </div>
    );
}

export default ProductList;