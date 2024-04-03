import { useEffect, useRef } from "react";

const InputWithLabel = ({id, type, name, value, isFocused, onChange, children}) => {
    const inputRef = useRef();
    useEffect(()=> {
        if (isFocused && inputRef.current){
            inputRef.current.focus();
        }
    }, [isFocused])
    
    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                ref={inputRef}
                id={id}
                type={type}
                name={name}
                value={value}
                autoFocus={isFocused}
                onChange={onChange}
            />
        </>
    );
};

export default InputWithLabel;
