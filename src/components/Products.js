import React, { useContext } from 'react';

// consuming and add useContext above from React
import ProductContext from '../contexts/ProductContext';

// Components
import Product from './Product';

const Products = (props) => {
	// make use of useContext, destructure and remove props
	const { products } = useContext(ProductContext);
	// console.log(values);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default Products;
