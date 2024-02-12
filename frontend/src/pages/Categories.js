// Categories.js
import React from 'react';
import All_Products from './All_Products';
import { useParams } from 'react-router-dom';

const Categories = (props) => {
     const { category } = useParams();

     let filteredProducts;


     filteredProducts = props.productCategory.filter((element) => {
          return element.category === category;
     });


     return (
          <>
               <All_Products productCategory={filteredProducts} />
          </>
     );
}

export default Categories;
