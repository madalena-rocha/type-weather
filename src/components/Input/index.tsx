import './styles.css';
import { Spin } from '../Spin';
import { InputHTMLAttributes } from 'react';

// interface contendo todas as propriedades que um input tem, 
// mais as propriedades adicionadas de forma customizada
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean; // ? para definir propriedade opcional
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input" >
      <input type='text' {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}