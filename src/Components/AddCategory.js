import React, { Fragment, useState } from 'react';
import propTypes from 'prop-types';

export default function AddCategory({setCategories}) {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (evt) =>{
        setInputValue(evt.target.value);
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        if(inputValue.trim().length > 2){

            setCategories(cats => [inputValue,...cats]);
            setInputValue('');
        }
        
        
    };

    return (
           <form onSubmit={handleSubmit}>
                    <input type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} />
           </form>
    )
}

AddCategory.propTypes ={
    setCategories: propTypes.func.isRequired,
}


