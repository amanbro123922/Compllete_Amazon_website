import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import All_products_Info from "./images/All_products_Info.json"

const All_Product_Items = (props) => {
  const { category } = useParams();

  // Define state variables
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("All colors");

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/products/${category}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        // Introduce a delay of 2 seconds before setting loading to false
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
  }, [category]);

  if (loading) {
    return (
      <div className="main-loading-wrapper flex-box">
        <img src="https://assets-v2.lottiefiles.com/a/53b80118-1161-11ee-b538-4f02e47c3050/EtQmNhvlO1.gif" />
      </div>
    )
  }

  if (!products) {
    return null;
  }

  // Filter products by color and category
  const uniqueColors = [...new Set(products.map(product => product.color))];

  const filteredByCategories = products.filter(element => element.category === category);

  const filteredProductByColors = filteredByCategories.filter(element => element.color === color.toLocaleLowerCase());


  const All_Product_length = All_products_Info.length;

  return (
    <div className="flex flex-wrap" id="productContainer">
      <div className="filter-area">
        <select className="sortColors" value={color} onChange={e => setColor(e.target.value)}>
          <option value="All colors">All colors</option>
          {uniqueColors.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </select>
      </div>
      <div className="allProduct-wrapper">
        {color === "All colors" ? (
          props.productCategory.map((element, index) => (
            <a href={`/${element.category}/${index}`} key={index} className="productItems">
              <div className="product-image">
                <img src={element.url} alt={`Product ${index}`} />
              </div>
              <div className="product-text">
                <h2 className="product-title">{element.title.slice(0, 30)}...</h2>
                <h3 className="product-price">₹ {element.price}</h3>
                <p className="product-desc">{element.title.slice(0, 80)}...</p>
              </div>
            </a>
          ))
        ) : (
          filteredProductByColors.map((element, index) => (
            <a href={`/allProducts/${All_Product_length - element.id - 1}`} className="productItems" key={index}>
              <div className="product-image">
                <img src={element.url} alt={`Product ${index}`} />
              </div>
              <div className="product-text">
                <h2 className="product-title">{element.title.slice(0, 30)}...</h2>
                <h3 className="product-price">₹ {element.price}</h3>
                <p className="product-desc">{element.title.slice(0, 80)}...</p>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
};

export default All_Product_Items;
