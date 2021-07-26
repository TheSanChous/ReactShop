import { React, useContext } from 'react'
import { Context as ContextBasket } from '../../context/Basket/BasketContext'
import { Link } from 'react-router-dom'

export default function Basket() {
    const BasketContext = useContext(ContextBasket);

    function onClickRemove(e) {
        const productId = e.target.parentElement.id;
        BasketContext.remove(productId);
    }

    function onCountChange(e){
        const productId = e.target.parentElement.parentElement.id;
        BasketContext.setCount(productId, e.target.value);
    }
    
    function calculateBasketSum() {
        let sum = 0;
        BasketContext.basket.forEach(product => {
            sum += product.price * product.count;
        });
        return sum;
    }

    if (!BasketContext.basket || BasketContext.basket.length == 0) {
        return (
            <div className="p-5 text-center text-muted">
                <h3>Корзина пуста.</h3>
                <Link to="/">На главную</Link>
            </div>
        )
    }

    return (
        <>
            <div className="products container p-5">
                {BasketContext.basket.map(product => {
                    return (
                        <div className="card">
                            <Link to={`/product?id=${product.id}`}>
                                <img className="card-img-top" src={product.image} alt="Image"></img>
                            </Link>
                            <div className="card-body" id={product.id}>
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.price} грн.</p>
                                <div className="input-group">
                                    <input type="number" value={product.count} onChange={(e) => onCountChange(e)} min="1" class="form-control" placeholder="Количество" aria-describedby="addon-wrapping"></input>
                                    <span className="input-group-text">шт.</span>
                                </div>
                                <p></p>
                                <button className="btn btn-secondary" onClick={(e) => onClickRemove(e)}>Убрать</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="m-1 fixed-bottom badge badge-secondary">
                <h5>Сумма: {calculateBasketSum()}</h5>
            </div>
        </>
    )
}
