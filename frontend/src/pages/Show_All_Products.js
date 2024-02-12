import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import All_products_Info from '../components/images/All_products_Info.json'
import Top_Products from '../components/Top_Products'

const Show_All_Products = (props) => {



     const navigate = useNavigate();

     const { allProductsId } = useParams();

     const allProductIndex = parseInt(allProductsId);
     const mainProduct = All_products_Info[allProductIndex];

     const categoryProducts = All_products_Info.filter((element) => {
          return element.category === mainProduct.category;
     })

     const handleAddToCart = () => {
          window.scroll(0, 0);
          props.addToCart(mainProduct);
          navigate("/cart")
     }

     return (
          <div className="show-productArea">
               <div style={{ marginBottom: '90px' }} className="show-product-wrapper flex">
                    <div className="left">
                         <div className="product-image">
                              <img src={mainProduct.url} alt="..." />
                         </div>
                         <div className="recommended-images">
                              <img src={mainProduct.url} alt=".." />
                              <img src={mainProduct.url} alt=".." />
                              <img src={mainProduct.url} alt=".." />
                              <img src={mainProduct.url} alt=".." />
                         </div>
                    </div>
                    <div className="right">
                         <div className="product-content">
                              <h2 className="product-title">{mainProduct.title}</h2>
                              <p className="product-desc">{mainProduct.desc}</p>
                         </div>
                         <h2 className='productPrice'>₹{mainProduct.price}</h2>

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

               <Top_Products isBorder="false" categoryValue={categoryProducts[0].category} topProductTitle="Related items" />


          </div>
     )
}

export default Show_All_Products
