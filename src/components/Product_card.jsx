import React from 'react'
import './Product_card.css';

function Product_card() {
  return (
   <>
   <div class="scroll-carousel " >
    <div class="scroll-card bg-white"  >
      <a >
        <img src="" alt="Product Image" class="card-image"/>
      </a>
      <div class="card-title">Title</div>
      <div class="row pricetag">
        <div class="col-8 d-flex">
          <s class="ms-4 originalcutting">₹price</s>
          <div class="card-price">₹price</div>
        </div>
        <div class="col-4">
          <button class="buy-btn">+</button>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}

export default Product_card
