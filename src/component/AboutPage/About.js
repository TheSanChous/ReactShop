import React from 'react'

export default function About() {
    return (
        <div className="p-5 container ext-secondary flex">
            <div>
                <h3 className="text-secondary">Магазин "Гусь"</h3>
                <p><code>v0.1.0</code></p>
            </div>
            <h5 className="text-secondary">
                Этот сайт был написан <a href="https://github.com/TheSanChous"> Александром Новицким </a> используя <a href="https://reactjs.org/"> React </a>
                и <a href="https://getbootstrap.com/"> Bootstrap </a>.
            </h5>
        </div>
    )
}
