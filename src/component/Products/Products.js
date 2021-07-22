import {React, useContext} from 'react'
import Context from '../../context/Products/ProductsContext';

export default function Products() {
    const ProductsContext = useContext(Context);

    function onClickBuy(e){
        const productId = e.target.parentElement.id;
        ProductsContext.setActive(productId, false);
    }

    console.log("draw products")
    return (
        <div className="products container p-1">
            {ProductsContext.products.map(product => {
                return (
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt="Image"></img>
                        <div className="card-body" id={product.id}>
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.price} грн.</p>    
                            <button className="btn btn-primary" onClick={(e) => onClickBuy(e)} disabled={!product.active}>Купить</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
