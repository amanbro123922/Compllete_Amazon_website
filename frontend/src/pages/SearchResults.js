// SearchResults.js

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import All_products_Info from '../components/images/All_products_Info';


const SearchResults = () => {
     const { keyword } = useParams();

     // Define state variables
     const [products, setProducts] = useState(null);
     const [loading, setLoading] = useState(true);
     const [color, setColor] = useState("All colors");

     // Fetch data from the API when the component mounts
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(`http://localhost:5000/api/v1/products/query/${keyword}`);
                    if (!response.ok) {
                         throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setTimeout(() => {
                         setProducts(data);
                         setLoading(false);
                    }, 2000);
               } catch (error) {
                    console.error('Error fetching products:', error);
                    setLoading(false);
               }
          };

          fetchData();
     }, [products]);



     if (loading) {
          return (
               <div className="main-loading-wrapper flex-box">
                    <img src="https://assets-v2.lottiefiles.com/a/53b80118-1161-11ee-b538-4f02e47c3050/EtQmNhvlO1.gif" />
               </div>
          );
     }

     if (!products) {
          return null;
     }




     const filteredProducts = products.filter(product =>
          product.title.toLowerCase().includes(keyword.toLowerCase())
     );

     const All_Product_length = All_products_Info.length;

     return (
          <>
               <>
                    <div className='searchResults-wrapper'>
                         {filteredProducts.length !== 0 &&
                              <h2 className='result-title'>Search Results for "{keyword}"</h2>}
                         {filteredProducts.length > 0 ? (
                              <div className="flex flex-wrap" id="productContainer">
                                   <div className="allProduct-wrapper" >
                                        {filteredProducts.map((element, index) => (
                                             <a href={`/allProducts/${All_Product_length - element.id - 1}`} key={index} className="productItems">
                                                  <div className="product-image">
                                                       <img src={element.url} alt={`Product ${index}`} />
                                                  </div>
                                                  <div className="product-text">
                                                       <h2 className="product-title">{element.title.slice(0, 30)}...</h2>
                                                       <h3 className='product-price'>₹{element.price}</h3>
                                                       <p className="product-desc">{element.title.slice(0, 80)}...</p>
                                                  </div>
                                             </a>
                                        ))}
                                   </div>
                              </div>
                         ) : (
                              <>
                                   <p className='not-found-title'>No products found for "{keyword}".</p>
                                   <div className='not-found-image flex-box'>
                                        <img src="https://www.indiarefurb.com/assets/img/no-result-found.png" alt=".." />
                                   </div>
                              </>

                         )}
                    </div>
               </>
          </>
     );
};

export default SearchResults;
