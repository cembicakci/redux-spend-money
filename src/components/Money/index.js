import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CountUp from 'react-countup';

import './style.css'

function Money() {

  const [prevMoney, setPrevMoney] = useState(0);

  const items = useSelector(state => state.products.items);
  const money = useSelector(state => state.products.money);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    if(status === 'idle'){
      setTimeout(() => {
        setPrevMoney(money);
      }, 2000)
    }
  }, [items])

  return (
    <div className='money'>
      <CountUp 
         start={prevMoney}
         end={money}
         preserveValue={true}
         separator=","
         decimals={0}
         decimal=","
         prefix="$"
      />
    </div>
  )
}

export default Money