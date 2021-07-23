import {React, useContext} from 'react'
import { Context as ContextBasket } from '../../context/Basket/BasketContext'
import { Context as ContextProducts } from '../../context/Products/ProductsContext'

export default function Product(props) {

    const ProductsContext = useContext(ContextProducts);
    const BasketContext = useContext(ContextBasket);

    function onClickBuy(e) {
        const productId = e.target.parentElement.id;
        ProductsContext.setActive(productId, false);
        BasketContext.add(ProductsContext.products[productId])
    }

    function isProductInBasket(product) {
        return BasketContext.basket.find(item => item.id == product.id && true) || false;
    }

    const product = props.product;

    return (
        <div className="card">
            <img className="card-img-top" src={product.image} alt="Image"></img>
            <div className="card-body" id={product.id}>
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.price} грн.</p>    
                <button className="btn btn-secondary" onClick={(e) => onClickBuy(e)} disabled={isProductInBasket(product)}>Купить</button>
            </div>
        </div>
    )
}
