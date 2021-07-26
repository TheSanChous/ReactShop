import { React, useContext } from 'react'
import { Context as ContextBasket } from '../../context/Basket/BasketContext'
import { Context as ContextProducts} from '../../context/Products/ProductsContext';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function ProductPage() {
    const BasketContext = useContext(ContextBasket);
    const ProductsContext = useContext(ContextProducts);
    const location = useLocation();
    const paramsParcer = new URLSearchParams(location.search);
    const productId = paramsParcer.get("id");
    const Product = ProductsContext.products.find(i=>i.id == productId);
    
    function onClickBuy() {
        ProductsContext.setActive(productId, false);
        BasketContext.add(ProductsContext.products[productId])
    }

    function isProductInBasket(product) {
        return BasketContext.basket.find(item => item.id == product.id && true) || false;
    }

    if(!Product){
        return (
            <div className="p-5 text-center text-muted">
                <h3>Товар не найден.</h3>
                <Link to="/">На главную</Link>
            </div>
        )
    }

    return(
        <div className="container p-5">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={Product.image} className="img-fluid rounded" alt="Prodcut image"></img>
                </div>
                <div className="col-md-8">
                <div className="pl-4">
                    <div>
                        <h5>{Product.title}</h5>
                    </div>
                    <div>
                        <p className="card-text"><small className="text-muted">Цена: </small>{Product.price} <small className="text-muted"> грн.</small></p>
                    </div>
                    <div className="pt-3">
                        <button className="btn btn-secondary" onClick={onClickBuy} disabled={isProductInBasket(Product)}>Купить</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
