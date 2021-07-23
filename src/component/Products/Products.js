import {React, useContext} from 'react'
import { Context as ContextProducts} from '../../context/Products/ProductsContext';
import Product from './Product';

export default function Products() {

    const ProductsContext = useContext(ContextProducts);

    return (
        <div className="products container p-1">
            {
                ProductsContext.products.map(p => {
                    return <Product product={p}></Product>
                })
            }
        </div>
    )
}
