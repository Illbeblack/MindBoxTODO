import styled from 'styled-components';
import { ChangeEvent } from '../types';

export default function Input({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent) => void;
}) {
  return (
    <CustomInput placeholder={placeholder} value={value} onChange={onChange} />
  );
}

const CustomInput = styled.input`
  border: 1px solid var(--color-dark-gray);
  border-radius: 10rem;
  width: 50rem;
  padding: 1rem 2.5rem;

  font-size: 2rem;
  color: var(--color-dark-gray);
`;
