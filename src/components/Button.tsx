import React from 'react';

export default function Button(ButtonProps: { type: string; text: string | undefined; action: Function; }) {
    return (
        <button 
            className={'btn text-uppercase col-12 pt-3 pb-3 btn-' + ButtonProps.type} 
            onClick={() => ButtonProps.action(ButtonProps.text + '-button was clicked')}
        >
          {ButtonProps.text} (0)
        </button>
    )
}
