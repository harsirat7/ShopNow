import React, { useState } from 'react';
import CoreHeader from './Components/CoreHeader';
import "./Components/CSS/HomePage.css";
import ViewPortel from './Components/ViewPortel';
import CoreFooter from './Components/CoreFooter';

export default function HomePage() {

  const [viewPortel, setViewPortel] = useState(false);
  const [buttonId, setButtonId] = useState(0);
  const productImages = [
    "/Core/homePage1.jpg",
    "/Core/homePage2.jpg",
    "/Core/homePage3.jpg",
    "/Core/homePage4.jpg",
    "/Core/homePage5.jpg",
    "/Core/homePage6.jpg",
    "/Core/homePage7.jpg",
    "/Core/homePage8.jpg",
  ];
  const [specialOfferDescription,setSpecialOfferDescription]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, laboriosam, porro, recusandae dolorum saepe nesciunt ipsa accusamus temporibus non ad veritatis hic ab reiciendis. Molestiae aut ad sit a maiores quidem consequatur consequuntur. Temporibus nesciunt eos illum aspernatur, nulla sunt cum? Fugiat maiores error dolore aut doloribus voluptatum ipsam quidem.");

  const [specialOfferOldPrice,setSpecialOfferOldPrice]=useState(24.99);
  const [specialOfferNewPrice,setSpecialOfferNewPrice]=useState(10.99);
  const [specialOfferImage,setSpecialOfferImage]=useState("/Core/specialOfferImage.jpg");


  const productDetailes = ["Light Grey Jacket", "Wooden and Steel Table", "Premium Glasses", "Home Sudio", "Cobmo Tshirts", "Grey Shirt", "Pink Sofa", "Ceiling Bulb"];
  const productPrice = [5.23, 10, 2.3, 50, 6, 2.5, 50, 15];



  const handleViewProduct = (index) => {
    setViewPortel(true);
    setButtonId(index);
  };


  return (
    <React.Fragment>
      <CoreHeader />

      <div className="speicalOfferContainer">
        <div className="row specialOfferRowContainer">

          <div className="speicalOfferImageContainer">
                <img src={specialOfferImage} alt="" className="speicalOfferImage" />
          </div>

          <div className="specialOfferContentContainer">
              <div className="specialOfferMainHeadingContainer">
                  <h2 className='specialOfferMainHeading'>Special Offer</h2>
              </div>

              <div className="specialOfferDescriptionContainer">
                <span className="specialOfferDescription">{specialOfferDescription}</span>
              </div>

              <div className="specialOfferInnerContainer">
                  <div className="specialOfferPriceContainer">
                    <h2>$</h2>
                    <h2 style={{textDecorationLine:"line-through"}}>{specialOfferOldPrice}</h2>
                    <h2>{specialOfferNewPrice}</h2>
                  </div>

                  <div className="specialOfferButtonContainer">
                    <button className="specialOfferButton">Add to Cart</button>
                  </div>
              </div>

          </div>



              
        </div>
      </div>






      <div className={`firstContainer  ${viewPortel ? "blur" : ""}`}>
        <div className="rowContainer">

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[0]} alt="Img1" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[0]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[0]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(0)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[1]} alt="img2" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[1]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[1]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(1)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[2]} alt="img3" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[2]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[2]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(2)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[3]} alt="img4" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[3]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[3]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(3)}>View more</button></div>
          </div>


        </div>
      </div>


      <div className={`firstContainer  ${viewPortel ? "blur" : ""}`}>
        <div className="rowContainer">

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[4]} alt="Img5" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[4]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[4]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(4)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[5]} alt="img6" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[5]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice' >${productPrice[5]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(5)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[6]} alt="img7" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[6]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[6]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(6)}>View more</button>
            </div>
          </div>

          <div className="cardContainer">
            <div className="imgContainer">
              <img src={productImages[7]} alt="img8" className='frontImg' />
            </div>
            <div className="productNameContainer">
              <span className="productName">{productDetailes[7]}</span>
            </div>
            <div className="productContentContainer">
              <h2 className='productPrice'>${productPrice[7]}</h2>
              <button className='viewProductBtn' onClick={() => handleViewProduct(7)}>View more</button>
            </div>
          </div>
        </div>
      </div>


      {viewPortel &&
        <ViewPortel
          productDetailes={productDetailes}
          productPrice={productPrice}
          buttonId={buttonId}
          productImages={productImages}
          closeFunction={() => setViewPortel(false)}
        />
      };

      <div className="SliderContainer">
        <div className="sliderInnrerContainer">

        </div>
      </div>


      <CoreFooter/>


    </React.Fragment>
  )
}
