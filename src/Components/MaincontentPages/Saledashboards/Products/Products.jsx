import React from "react";
import "./Products.css";
const Products = () => {
 
    const productsList=[{
        name:"RICA WAX",
        image:"/Assets/Images/productimage.svg",
        quantity:"Unlimited",
        category:"Hair",
        Price:"180"
    }]

  return (
    <div className="Productsprnt mt-9">
      <div className="toprow flex px-6 py-8 justify-between">
        <div className="prouctheadprnt basis-2/4">
          <p className="productshead">Product name</p>
        </div>

        <div className="prouctheadprnt basis-2/12 text-center">
          <p className="productshead ">Category</p>
        </div>
        <div className="prouctheadprnt basis-2/12 text-center">
          <p className="productshead">Quantity</p>
        </div>
        <div className="prouctheadprnt basis-1/12 text-center">
          <p className="productshead">Price</p>
        </div>
      </div>

      {productsList.map((product)=>{
    
         return<div className="productsrow flex p-6 justify-between items-center">
            <div className="prouctheadprnt basis-2/4 flex gap-2 items-center">
          <img src={product.image} className=" w-20 h-20" alt="productimage"/>
          <p className="productshead">{product.name}</p>
        </div>

        <div className="prouctheadprnt basis-2/12 text-center">
          <p className="productshead ">{product.category}</p>
        </div>
        <div className="prouctheadprnt basis-2/12 text-center">
          <p className="productshead">{product.quantity}</p>
        </div>
        <div className="prouctheadprnt basis-1/12 text-center">
          <p className="productshead">{product.Price}</p>
        </div>
        </div>
      })
       }
       <div className="toprow flex px-6 py-8  justify-center">
        <p className="paginationtext">1 of 1</p>
       </div>
    </div>
  );
};

export default Products;
