import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

import { useField } from '@unform/core';
import { Container } from './styles';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ElementType | any
}

export function Input({
  name,
  icon: Icon,
  ...rest
}: InputProps){

  //refs
  const inputRef = useRef<HTMLInputElement>(null)
  
  //Estados
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  //fields
  const { fieldName, defaultValue, registerField } = useField(name);

  //Callbacks
  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container $isField={isFilled} $isFocused={isFocused}>
       {Icon && <Icon size={20} /> }

       <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}
