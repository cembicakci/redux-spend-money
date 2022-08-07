import React from 'react'
import millify from "millify";
import Dinero from "dinero.js";
import './style.css'

import { useSelector } from "react-redux";

function Receipt() {

  const products = useSelector(state => state.products.items)
  const total = useSelector(state => state.products.total)

  console.log(products)


  return (
    <div>
      {
        total > 0 &&
        <div className='receipt'>
          <h2 className='receipt-header'>Your Receipt</h2>

          {products.map((product) => (
            product.amount > 0 &&
            <div>
              <div className='receipt-item'>
                {product.title} x {product.amount} {'-'} <span> ${millify(product.price * product.amount)}</span>
              </div>
            </div>

          ))}

          {
            <div className='receipt-total'>
              <p>TOTAL:</p>
              <div>
                {Dinero({ amount: parseInt(total * 100) }).toFormat("$0,0")}
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Receipt