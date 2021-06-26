import React from 'react';

const CartContext = React.createContext({
    items:[],
    total: 0,
    addItems: () => {},
    removeItem: (id)=>{}
});

export default CartContext;