import styles from './Todo.module.css';
import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import styled from 'styled-components';
import { ITodo } from '../../entities/data.model';

export default function Todo({
  todoObj,
  deleteTodo,
  toggleTodo,
}: {
  todoObj: ITodo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) {
  return (
    <Container className={todoObj.isCompleted ? 'completed' : ''}>
      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleTodo(todoObj.id)}
      />
      <p>{todoObj.text}</p>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todoObj.id)}
      />
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  overflow-x: hidden;

  border: 1px solid gray;

  color: var(--color-dark-gray);
  font-size: 2.5rem;
  &.completed {
    opacity: 0.3;
    text-decoration: line-through;
  }
`;
