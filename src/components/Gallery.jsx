import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("mounting");
    }, []);

    useEffect(() => {
        console.log("updating: count =", count);
    }, [count]);

    function sayHello() {
        console.log("welcome");
    }

    return (
        <>
            <div className='dis'>
                <p>Mounting</p>
                <p>Welcome</p>
                <p>Count: {count}</p>
                <button onClick={sayHello}>Say Hello</button>
                <button onClick={() => setCount(count + 1)}>Increase</button>
            </div>
        </>
    );
};

export default Gallery;
