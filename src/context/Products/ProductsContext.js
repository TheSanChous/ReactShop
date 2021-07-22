import {React, useState, createContext} from 'react'

const initialState = [
    {
        id: 0,
        title: "Чашка",
        price: 249,
        image: "https://gifty.in.ua/public/cache/images/2/0/0/5/6/e45c88cab5fe5b7cb1e5819c65f86a15_900_700.jpg",
        active: true,
    },
    {
        id: 1,
        title: "Футболка",
        price: 100,
        image: "https://benyaizubrik.com/wp-content/uploads/B_Z_gussi.jpg",
        active: true,
    },
    {
        id: 2,
        title: "Кепка",
        price: 125,
        image: "https://vse-footbolki.ru/image/catalog/vsm/0/1/1320/1320952/previews/people_1_cap_trucker_front_white_700.jpg",
        active: true,
    },
    {
        id: 3,
        title: "Маска",
        price: 35,
        image: "https://ae01.alicdn.com/kf/Hce261065b48f445ba33f9fc2ab446f95k/Vacation-Goose-Unisex-Non-Disposable-Face-Mask-Anti-Haze-Dust-Mask-With-Filters-Protection-Cover-Respirator.jpg_220x220xz.jpg_.webp",
        active: true,
    },
    {
        id: 4,
        title: "Футболка",
        price: 150,
        image: "https://futbokraina.com.ua/image/cache/new/catalog/GS/det-f/white-22856.jpg",
        active: true,
    },
    {
        id: 5,
        title: "Футболка",
        price: 155,
        image: "https://vse-footbolki.ru/image/catalog/vsm/0/1/1320/1320952/previews/people_7_manshort_front_white_700.jpg",
        active: true,
    },
    {
        id: 5,
        title: "Кофта",
        price: 350,
        image: "https://storage.vsemayki.ru/images/0/1/1320/1320952/previews/people_12_hoodie_front_white_500.jpg",
        active: true,
    }
]

const Context = createContext();

export const ProductsContext = (props) => {
    const [products, setProducts] = useState(initialState)

    const setActive = (productId, value) => {
        setProducts(Prev=>{
            return Prev[productId].active = value;
        })
    }

    return (
        <Context.Provider value={{products, setActive}}>
            {props.children}
        </Context.Provider>
    )
}


export default Context;