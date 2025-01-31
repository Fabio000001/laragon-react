import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [navData, setNavData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los productos desde el endpoint
    const fetchProducts = async (currentPage) => {
      try {
        const response = await fetch(`/api/products?page=${currentPage}`, { credentials: "include", });

        if (response.redirected) {
          window.location.href = response.url;
          return;
        }
        const data = await response.json();

        setProducts(data.data); // Asumiendo que los datos están en response.data.data
        setNavData(data.links);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts(currentPage);
  }, [currentPage]); // El array vacío como segundo argumento asegura que esto se ejecute solo una vez

  const Pagination = (page) => {
    setCurrentPage(page.slice(44));
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (

    <ProductList products={products} navData={navData} Pagination={Pagination} />

  );
};

export default Main;