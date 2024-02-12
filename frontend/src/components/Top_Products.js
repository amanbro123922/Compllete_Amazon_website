import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const Top_Products = (props) => {

     const { allProductsId, productId, category } = useParams();

     const { isBorder, categoryValue, topProductTitle } = props;

     // Define state variables
     const [products, setProducts] = useState(null);
     const [loading, setLoading] = useState(true);
     const [color, setColor] = useState("All colors");

     // Fetch data from the API when the component mounts
     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch(`http://localhost:5000/api/v1/products`);

                    if (!response.ok) {
                         throw new Error('Failed to fetch products');
                    }
                    const data = await response.json();
                    setTimeout(() => {
                         setProducts(data);
                         setLoading(false);
                    }, 1000);
               } catch (error) {
                    console.error('Error fetching products:', error);
                    setLoading(false);
               }
          };

          fetchData();
     }, [categoryValue]);


     if (loading) {
          return (
               <div className="loading-wrapper">
                    <img src="https://assets-v2.lottiefiles.com/a/53b80118-1161-11ee-b538-4f02e47c3050/EtQmNhvlO1.gif" />
               </div>
          );
     }

     if (!products) {
          return null;
     }



     const filterBannerProducts = products.filter((element) => {
          return element.category === categoryValue.toLowerCase();
     });
     console.log(filterBannerProducts);


     const borderStyle = {
          border: '1px solid gray'
     }

     const topProductStyle = {
          marginBottom: '14px',
          paddingLeft: '13px',
          fontSize: '24px',
          fontWeight: '500',
          color: '#161616'
     }


     return (
          <div className='top-products'>
               <h3 style={topProductStyle}>{topProductTitle}</h3>
               <div className="products-wrapper flex">
                    {
                         categoryValue === "allProducts" ?
                              products.map((itm, i) => (
                                   <a href={`/allProducts/${products.length - itm.id - 1}`} key={i} className="top-product-items" style={!isBorder ? borderStyle : {}}>
                                        <div className="top-product-img">
                                             <img src={itm.url} alt=".." />
                                        </div>
                                        <div className="top-title">
                                             <p>{itm.title.slice(0, 30)}...</p>
                                        </div>
                                        <h3 className="top-price">₹{itm.price}</h3>
                                        <div className="top-desc">
                                             <p>{itm.desc.slice(0, 80)}...</p>
                                        </div>
                                   </a>
                              ))

                              :

                              filterBannerProducts.map((itm, i) => (
                                   itm && (
                                        <a href={`/${itm.category}/${i}`} key={i} className="top-product-items" style={!isBorder ? borderStyle : {}}>
                                             <div className="top-product-img">
                                                  <img src={itm.url} alt=".." />
                                             </div>
                                             <div className="top-title">
                                                  <p>{itm.title && itm.title.slice(0, 30)}...</p>
                                             </div>
                                             <h3 className="top-price">₹{itm.price}</h3>
                                             <div className="top-desc">
                                                  <p>{itm.desc && itm.desc.slice(0, 80)}...</p>
                                             </div>
                                        </a>
                                   )
                              ))
                    }
               </div>
          </div >
     )
}

export default Top_Products
