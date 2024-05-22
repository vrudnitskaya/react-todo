import { useEffect, useRef } from "react";

const InputWithLabel = ({id, type, name, value, onChange, placeholder, children}) => {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
    },[])
    
    //add empty dependency array for focusing on input just for the first render
    
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
};

export default InputWithLabel;
