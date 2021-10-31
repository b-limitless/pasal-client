import React, { useState, useEffect, Fragment } from 'react';

interface AddSliderProps {
    sliders: any
}

const AddSlider: React.FC<AddSliderProps> = ({ children, sliders }) => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        if (counter > 4) {
            setCounter(1);
        }
        const counterPlus = setInterval(() => {
            setCounter((prevState) => prevState + 1);
        }, 3000);
        return () => clearInterval(counterPlus);
    }, [counter]);

    return (
        <div className="grid slides">
            {sliders.map((item: any, n: number) => <input
                key={`radio-btn${item.id}`}
                type="radio"
                name="rado-btn"
                id={`radio${item.id}`}
                checked={counter === item.id}
                readOnly />)}
            {/* {children} */}
            {sliders.map((item: any, n: number) => <Fragment key={`content-${item.id}`}>{item.content}</Fragment>)}

            <div className="navigation-auto">
                {sliders.map((item: any, n: number) => <div key={`radio-nav${item.id}`}
                    className={`auto-btn${item.id}`}></div>)}
            </div>

            <div className="navigation-manual">
                {sliders.map((item: any, n: number) => <label
                    key={`radio-manual-${item.id}`}
                    htmlFor={`radio${item.id}`}
                    className="manual-btn1 manual-btn"
                    onClick={() => setCounter(item.id)}></label>)}
            </div>
        </div>
    );
}

export default AddSlider