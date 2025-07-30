import React, { useState } from 'react'
import Item from '../Item';
import '../all.css';


const Home = () => {


    let productArray = [
        {
            id: 1,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 2,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 3,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 4,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 5,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 6,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },
        {
            id: 7,
            phone: "iphone",
            price: 3000,
            desc: "good",
            counter: 0,
        },

    ]
    let [products, setProducts] = useState(productArray);
    function deletProd(prodId) {
        let newPro = products.filter((product) => product.id !== prodId);
        setProducts(newPro)
    }


    return (
        <>
            <div className="products">
                {products.map((product) => (
                    <Item key={product.id} product={product} deletProd={deletProd} />
                ))}

            </div>

        </>
    )
}

export default Home
