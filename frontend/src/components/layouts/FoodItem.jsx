import React from 'react'

export default function FoodItem() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img 
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.finedininglovers.com%2Fsites%2Fg%2Ffiles%2Fxknfdk626%2Ffiles%2F2020-12%2Fpepperoni_pizza%25C2%25A9iStock.jpg&f=1&nofb=1&ipt=1da292cf73f815c8e3be885d8a1f515a849d2649880f3a897c6f97232bdc68a8&ipo=images" 
            alt="pizza" 
            className='card-img-top mx-auto'
            />
            <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>Veg Pizza</h5>
                <p className='fooditem_des'> Just a vegetarian Pizza Nigga</p>
                <p className='card-text'>
                    {/* <LiaRupeeSignSolid /> */}
                    Rs.
                    123
                    <br />
                </p>
                <button 
                type='button'
                id='cart_btn'
                className='btn btn-primary d-inline ml-4'>Add to Cart</button>
                <p>
                    status:{" "}
                    <span 
                        id="stock_status"
                        className={true ? "greenColor": "redColor"}>
                            { true ? "In Stock": "Out Of Stock"}

                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}
