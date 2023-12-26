"use client";
import { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState = ({ children }) => {
  const [count, setCount] = useState([]);
  const [indx, setIndx] = useState(1);
  const [price, setPrice] = useState(0);
  const [qnty, setQnty] = useState({});
  // console.log(count);

  const addToCart = (pice, qty, name, url) => {
    const Cart = count;
    for (let index = 0; index < qty; index++) {
      const p = pice * qty;
      setPrice(price + p);
      // console.log(price + pice);
      Cart.push([pice, name, url]);
    }
    setCount(Cart);
    if (qnty[name]) {
      setQnty({ ...qnty, [name]: qnty[name] + qty });
    } else {
      setQnty({ ...qnty, [name]: qty });
    }
  };
  const removeFromCart = (itemName, pri) => {
    const updatedCart = [...count];
    const index = updatedCart.findIndex(item => item.name === itemName);
    // if (index !== -1) {
      updatedCart.splice(index, 1); // Remove 1 element at the found index
      setCount(updatedCart);
      setPrice(prevPrice => prevPrice - pri);
      setQnty({ ...qnty, [itemName]: (qnty[itemName] || 0) - 1 });
    // }
    console.log('Delete buuton has been clicked');
  };
  

  return (
    <NoteContext.Provider
      value={{
        Count: count,
        setCount: setCount,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        price: price,
        quantity: qnty,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;

// 'use client'
// import React, { useState } from "react";
// import NoteContext from "./NoteContext";

// const NoteState = ({ children }) => {
//   const [count, setCount] = useState([]);
//   const [price, setPrice] = useState(0);
//   const [qnty, setQnty] = useState({});
// console.log(qnty);
//   const addToCart = (price, qty, name, url) => {
//     const updatedCount = count;
//     for (let i = 0; i < qty; i++) {
//       updatedCount.push({ price, name, url });
//     }
//     setCount(updatedCount);

//     const totalPrice = price * qty;
//     setPrice(prevPrice => prevPrice + totalPrice);

//     if (qnty[name]) {
//       setQnty({ ...qnty, [name]: qnty[name] + qty });
//     } else {
//       setQnty({ ...qnty, [name]: qty });
//     }
//   };

//   const removeFromCart = (itemName, itemPrice) => {
//     const updatedCount = count.filter(item => item.name !== itemName);
//     setCount(updatedCount);

//     setPrice(prevPrice => prevPrice - itemPrice * (qnty[itemName] || 1));

//     const updatedQnty = { ...qnty };
// delete updatedQnty[itemName];
//     setQnty(updatedQnty);
//   };

//   return (
//     <NoteContext.Provider
//       value={{
//         count,
//         setCount,
//         addToCart,
//         removeFromCart,
//         price,
//         qnty
//       }}
//     >
//       {children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteState;
