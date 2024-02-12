import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import All_Products_Info from '../components/images/All_products_Info';
import { useNavigate } from 'react-router-dom'
import Top_Products from '../components/Top_Products';


const ShowProducts = (props) => {

     const navigate = useNavigate();

     const { category, productId } = useParams();
     const productIndex = parseInt(productId);



     // Filter products based on the category
     const categoryProducts = All_Products_Info.filter((product) => product.category === category);

     const product = categoryProducts[productId];


     if (!product) {
          return <p>Product not found</p>;
     }



     const handleAddToCart = () => {
          props.addToCart(product);
          navigate("/cart")
          window.scroll(0, 0);

     }



     return (
          <div className="show-productArea">
               <div className="show-product-wrapper flex">
                    <div className="left">
                         <div className="product-image">
                              <img src={product.url} alt="..." />
                         </div>
                         <div className="recommended-images">
                              <img src={product.url} alt=".." />
                              <img src={product.url} alt=".." />
                              <img src={product.url} alt=".." />
                              <img src={product.url} alt=".." />
                         </div>
                    </div>
                    <div className="right">
                         <div className="product-content">
                              <h2 className="product-title">{product.title}</h2>
                              <p className="product-desc">{product.desc}</p>
                         </div>
                         <h2 className='productPrice'>₹{product.price}</h2>

                         <div className="about-company">
                              <h3>About our company</h3>

                              <li><b>Global Marketplace</b>: Amazon offers a vast global marketplace where millions of sellers connect with customers, providing a diverse array of products from books and electronics to fashion and home goods.</li>
                              <li><b>Prime Membership</b>: Enjoy exclusive benefits like fast shipping, streaming, and more with Amazon Prime, enhancing the overall shopping and entertainment experience.</li>
                              <li><b>Innovative Technology</b>: Leveraging cutting-edge technology, Amazon employs advanced algorithms and AI to personalize recommendations, ensuring a tailored shopping journey for each customer.</li>
                              <li><b>Reliable Customer Reviews</b>: Make informed decisions through authentic customer reviews, fostering transparency and trust in product quality and seller credibility.</li>
                              <li><b>Eco-friendly Initiatives</b>: Amazon prioritizes sustainability with programs like Amazon Renewed, encouraging the reuse of products, and initiatives to reduce its carbon footprint.</li>
                              <li><b>Community Engagement</b>: Amazon engages with local communities through programs like AmazonSmile, supporting charitable organizations and fostering a positive impact beyond the realm of online shopping.</li>

                         </div>


                         <div className="product-btn">
                              <button className='buy-now'>Buy now</button>
                              <button className='add-to-cart' onClick={handleAddToCart}>Add to cart</button>
                         </div>


                    </div>
               </div>

               <Top_Products isBorder="true" categoryValue={category} topProductTitle="Related items" />

          </div>
     )
}

export default ShowProducts
