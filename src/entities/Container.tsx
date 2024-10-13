import styled from 'styled-components';
import Form from '../widgets/Form/Form';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITodo } from './data.model';
import TodoList from '../widgets/TodoList/TodoList';
import TodosActions from '../widgets/TodosActions/TodosActions';

export default function Container() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [page, setPage] = useState<number>(0);

  const completedTodos = todos.filter((todo) => todo.isCompleted);
  const activeTodos = todos.filter((todo) => !todo.isCompleted);

  const addTodoHendler = (text: string) => {
    const newTodo: ITodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deletComplitedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;
  const itemsLeft = todos.filter((todo) => !todo.isCompleted).length;

  const handleAll = () => {
    setPage(0);
  };
  const handleActive = () => {
    setPage(1);
  };
  const handleCompleted = () => {
    setPage(2);
  };

  return (
    <Contant>
      <Form addTodo={addTodoHendler} />
      {(page === 0 && (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      )) ||
        (page === 1 && (
          <TodoList
            todos={activeTodos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
          />
        )) ||
        (page === 2 && (
          <TodoList
            todos={completedTodos}
            deleteTodo={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
          />
        ))}

      {!!todos.length && (
        <TodosActions
          itemsLeft={itemsLeft}
          completedTodos={!!completedTodoCount}
          resetTodos={resetTodosHandler}
          deletComplitedTodos={deletComplitedTodosHandler}
          handleAll={handleAll}
          handleActive={handleActive}
          handleCompleted={handleCompleted}
        />
      )}
    </Contant>
  );
}

const Contant = styled.div`
  padding: 5rem;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  border: 1px solid gray;
  width: 100rem;
  color: var(--color-black);
  box-shadow: var(--shadow-gray);
`;
