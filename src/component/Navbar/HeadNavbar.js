import React from 'react'
import { Link } from 'react-router-dom'

export default function HeadNavbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
            <div class="container-fluid">
                <div>
                    <Link class="navbar-brand" to="/">Shop</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="navbar-links collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-link" to="/basket">Basket</Link>
                        <Link class="nav-link" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
