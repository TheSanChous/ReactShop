import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Basket/BasketContext'

export default function HeadNavbar() {

    const basketLength = useContext(Context).basket?.length;

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
            <div class="container-fluid">
                <div>
                    <Link class="navbar-brand" to="/">Магазин</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-links collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" to="/basket">
                            Корзина
                            <span className="badge bg-secondary ml-1">
                                {basketLength > 0 ? basketLength : "" }
                            </span>
                        </Link>
                        <Link class="nav-link" to="/about">О проекте</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
