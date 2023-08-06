import { useState, useEffect } from 'react';


export default function useClickOutside(wrapperRef, func) {
  let [ needClick, setNeedClick ] = useState(true);
  let domNode = null;

  useEffect(() => {
    domNode = wrapperRef.current;

    let clickHandler = (event) => {
      if (event.target === domNode) {
        func();
        setNeedClick(false);
      }
    };

    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [wrapperRef, needClick]);
}
