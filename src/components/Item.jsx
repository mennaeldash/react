import React from 'react'

const Item = ({ product, deletProd }) => {
    let { id, phone, price, desc, counter } = product;
    return (
        <>
            <div className='all'>
                <h2>phone : {phone}</h2>
                <h2>price : {price}</h2>
                <h2>desc : {desc}</h2>
                <h2>counter : {counter}</h2>

                <button onClick={() => deletProd(id)}>delet</button>
            </div>

        </>
    )
}

export default Item
