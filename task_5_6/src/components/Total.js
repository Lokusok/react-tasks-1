import React from 'react';
import { observer } from 'mobx-react-lite';

import useStore from './../hooks/useStore';


export default observer(function Total() {
  const [ cartStore ] = useStore('cart');

  
  return (
    <>
      <p>
        Cart size: {cartStore.total.size}
      </p>

      <p>
        Cart price: {cartStore.total.price}
      </p>
    </>
  );
});