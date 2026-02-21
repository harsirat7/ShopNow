import React from 'react';
import "./CSS/viewPortel.css";


export default function ViewPortel({ productDetailes, productPrice, buttonId ,productImages,closeFunction}) {


    const productName = productDetailes[buttonId];
    const price = productPrice[buttonId];
    const imagePath=productImages[buttonId];

    return (
        <div className='viewPortelContainer'>
            <div className="imageContainer">
                <img src={imagePath} alt="ProductImage" className='viewProductImage'/>
            </div>
            <div className="contentContainer">
                <div className="nameContainer">
                    <span className="viewProductName">{productName}</span>
                </div>
                <div className="productContent">
                    <span className='viewProductPrice'>${price}</span>
                    <button className='viewButton'>Add to cart</button>
                </div>

                <div className="closeButtonDiv">
                    <button className='closeButton' onClick={closeFunction}>X</button>
                 </div>

            </div>

        </div>

       
    );
}
