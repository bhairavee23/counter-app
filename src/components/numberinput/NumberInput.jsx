import React, {useState} from 'react';

const NumberInput = () => {
    const [value, setValue] = useState(0);
    return ( <div>
        <div data-testid='number-value'>{value}</div>
        <div>
            <button type='button'>+</button>
            <button type='button'>-</button>
        </div>
    </div>  );
}
 
export default NumberInput;