import React from 'react';

const FormInput = ( {onChange, type="text" , value, placeholder} ) => {
  return (  
  <div>
    <label>
        <input
          onChange={onChange}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </label>
    </div> 
  )
}
 
export default FormInput;