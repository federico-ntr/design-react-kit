import React, { ChangeEvent, ReactElement } from 'react';
import { Input } from 'reactstrap';

export interface SelectProps {
  /**
   * L'identificativo univoco del componente
   */
  id: string;
  /**
   * Se `true` determina la disabilitazione del campo
   */
  disabled?: boolean;
  /**
   * L'etichetta del campo
   */
  label: string;
  /**
   * La lista di opzioni da visualizzare nella tendina del Select
   */
  children: ReactElement<'option'> | ReactElement<'option'>[];
  /**
   * Gestisce il cambio del valore selezionato
   * @param selectedValue
   * @returns
   */
  handleChange: (selectedValue: string) => void;
}

export const Select = ({
  id = 'select',
  disabled = false,
  label,
  children,
  handleChange
}: SelectProps) => {
  const _handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };
  return (
    <div className='select-wrapper'>
      <label htmlFor={id + '-select'}>{label}</label>
      <Input
        id={id + '-select'}
        name='select'
        type='select'
        disabled={disabled}
        onChange={_handleChange}
      >
        {children}
      </Input>
    </div>
  );
};
