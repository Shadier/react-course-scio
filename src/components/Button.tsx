import React, { useEffect, useState } from 'react';

export default function Button(ButtonProps: { type: string; text: string | undefined; action: Function; }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('start');
        if(count === 5) {
            alert('example of effect')
        }
    }, [count]);
    return (
        <button 
            className={'btn text-uppercase col-12 pt-3 pb-3 btn-' + ButtonProps.type} 
            onClick={() => {
                ButtonProps.action(ButtonProps.text + '-button was clicked');
                setCount(count + 1);
                
            }}
        >
          {ButtonProps.text} ({ count })
        </button>
    )
}
