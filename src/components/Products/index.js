import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyProduct, sellProduct } from '../../redux/productsSlice';
import Dinero from "dinero.js";

import './style.css'

function Products() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const money = useSelector(state => state.products.money);

  const findItem = (item) => {
    let addedItem = products.find((product) => product.id === item.id);
    return addedItem ? addedItem.amount : 0;

  }

  function handleChange({ e, amountOld, id, price }) {
    console.log(e.target.value, id, price, amountOld);

    let value = e.target.value === "" ? 0 : e.target.value;
    let result = Number(value) - Number(amountOld);

    result > 0
      ? dispatch(buyProduct({ amount: result, id: id, price: price }))
      : dispatch(sellProduct({ amount: result * -1, id: id, price: price }));

  }

  function sellItems(amount, id, price) {
    dispatch(buyProduct({ amount: amount, id: id, price: price }))
  }

  function buyItems(amount, id, price) {
    dispatch(buyProduct({ amount: amount, id: id, price: price }))
  }


  return (
    <div className='card-container'>

      {products && products.map((product) => (
        <div key={product.id} className='card'>
          <img alt={product.title} src={product.image} />
          <div className='card-body'>
            <h2 className='card-title'>{product.title}</h2>
            <p className='card-price'>
              {Dinero({ amount: parseInt(product.price * 100) }).toFormat(
                "$0,0"
              )}
            </p>
          </div>

          <div className='card-btn-group'>
            <button onClick={() => sellItems(-1, product.id, product.price)} className='btn-sell' disabled={!findItem(product)}>Sell</button>
            <input type='number' min='0' value={findItem(product)} onChange={(e) => (e.target.value) > 0 && handleChange({ e, amountOld: findItem(product), id: product.id, price: product.price })} />
            <button onClick={() => buyItems(1, product.id, product.price)} className='btn-buy' disabled={money < product.price}>Buy</button>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default Products