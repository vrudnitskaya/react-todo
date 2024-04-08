import { useEffect, useRef } from "react";

const InputWithLabel = ({id, type, name, value, isFocused, onChange, children}) => {
    const inputRef = useRef();
    useEffect(()=> {
        inputRef.current.focus();
    })
    
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
            />
        </>
    );
};

export default InputWithLabel;