import { React, createContext, useState} from 'react'

export const Context = createContext();

export const BasketContext = (props) => {
    const [basket, setBasket] = useState([]);

    const add = (product) => {
        setBasket((Prev) => {
            const newState = [...Prev, {...product, count: 1}]
            return newState;
        })
    }

    const setCount = (productId, value) => {
        if (value < 1) return;
        setBasket((Prev) => {
            const newState = [...Prev]
            newState.find(i => i.id == productId).count = value;
            return newState;
        })
    }

    const remove = (productId) => {
        setBasket((Prev) => {
            const NewState = [...Prev];
            NewState.splice(Prev.findIndex(item => item.id == productId), 1)
            return NewState;
        })
    }

    return (
        <Context.Provider value={{basket, add, setCount, remove}}>
            {props.children}
        </Context.Provider>
    )
}

