import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
    <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
);

export default ProductCard;