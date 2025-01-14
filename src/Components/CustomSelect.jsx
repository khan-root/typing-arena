

import React from 'react';
import Select from 'react-select';


const CustomSelect = (props) => {
  const { value, placeHolderTitle, onChangeHandler, cStyle, options, onHandleSelectSearch, searching=false } = props
  // const { customStyles } = useEmployees()

  const customStyles = {
        option: (provided, state) => ({
            ...provided,
            paddingLeft: state.data.isChild ? '20px' : '10px',
            fontSize: state.data.isChild ? '12px' : '14px',
            color: state.data.isChild ? 'var(--color-para)' : '14px',
        }),
    };

    const baseStyles = {
    control: base => ({
      ...base,
      fontSize: 14,
      padding: '0 8px',
      boxShadow: 'none',
      outline: 'none',
      border:0,
      borderRadius: '5px',
      color: 'var(--color-para)',
      backgroundColor: 'var(--color-input-bg)'

    }),
    placeholder: base => ({
      ...base,
      color: 'var(--color-para)',
    }),
    
    option: base => ({
      ...base,
      paddingLeft: '10px',
      backgroundColor: 'var(--color-input-bg)'
      // fontSize: '14px',
    }),
    input: base => ({
      ...base,
      padding: 0,
      margin: 0,

      color:'var(--color-para)'
    }),
    menu: (base) => ({
      ...base,
      zIndex: 9999999, // Ensures the dropdown menu appears above other elements
      // height:'50px'
    }),
    menuList: (base) => ({
      ...base,
      zIndex: 9999999, // Ensures the option list appears above other elements
      
      fontSize:12,
      backgroundColor: 'var(--color-input-bg)'

    }),
  };

  // Add customStyle if cStyle is true
  const styles = cStyle ? {
    ...baseStyles,
    ...customStyles // Assuming customStyle is an object
  } : baseStyles;
  return (
    <div>
      <Select
        placeholder={ `${searching ? `Search ${placeHolderTitle}` :  `Select ${placeHolderTitle}`}`}
        components={{ IndicatorSeparator: null}}
        value={value}
        options={options}     
        onChange={onChangeHandler}    
        onInputChange={onHandleSelectSearch} 
        styles={styles}

      />
    </div>
  )
}

export default CustomSelect