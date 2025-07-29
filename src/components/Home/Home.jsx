import React, { useState } from 'react'

const Home = () => {
    let [counter, setCounter] = useState(0)
    function Increse(param) {
        setCounter(counter + param)

    }
    return (
        <>
            <h1>counter:  {counter}</h1>
            <button className='btn' onClick={function () { Increse(1) }}>submit</button>

        </>
    )
}

export default Home
