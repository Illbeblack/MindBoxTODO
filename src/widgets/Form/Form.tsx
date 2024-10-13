import styled from 'styled-components';
import Input from '../../shared/Input/Input';
import SubmitButton from '../../shared/Submit/SubmitButton';
import { useState } from 'react';
import { ChangeEvent, FormEvent } from '../../shared/types';

export default function Form({ addTodo }: { addTodo: (text: string) => void }) {
  const [text, setText] = useState('');

  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <CustomForm onSubmit={onSubmitHandler}>
      <Input
        placeholder="Enter new todo"
        value={text}
        onChange={(e: ChangeEvent) => setText(e.target.value)}
      />
      <SubmitButton />
    </CustomForm>
  );
}

const CustomForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
