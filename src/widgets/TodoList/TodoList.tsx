import styled from 'styled-components';
import Todo from '../../shared/Todo.tsx/Todo';
import { ITodo } from '../../entities/data.model';

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}: {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}) {
  return (
    <Container>
      {todos[0] ? (
        todos.map((val: ITodo) => (
          <Todo
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            key={val.id}
            todoObj={val}
          />
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;
