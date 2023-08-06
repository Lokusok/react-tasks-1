import React from 'react';
import useStore from './../hooks/useStore';

import { observer } from 'mobx-react-lite';

 
export default observer(function CartButton({ productId }) {
  const [ cartStore ] = useStore('cart');

  return (
    <>
      {
        !cartStore.inCart(productId)
        &&
        <button 
          className="btn btn-primary text-nowrap"
          onClick={() => cartStore.add(productId)}
        >Add to cart</button>
      }

      {
        cartStore.inCart(productId)
        &&
        <button
          className="btn btn-warning text-nowrap"
          onClick={() => cartStore.remove(productId)}
        >Remove</button>
        }
    </>
  );
});
