const ProductList = (props) => {
    const { products, navData, Pagination, deleteProduct } = props;
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
                        <button type="button" className="bg-black text-white mt-2 mb-6 p-2 rounded-md" onClick={() => deleteProduct(product.id)}>Borrar producto {product.id}</button>
                    </li>
                ))}
            </ul>
            <div className="bg-black text-white mt-6 p-2 text-center">
                <button onClick={() => Pagination(navData.prev)} className="mx-5">Previous</button>
                <button onClick={() => Pagination(navData.next)} className="mx-5">Next</button>
            </div>
        </div>
    );
}

export default ProductList;