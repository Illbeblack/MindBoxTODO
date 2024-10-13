import styled from 'styled-components';
import CustomButton from '../../shared/CustomButton/CustomButtom';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default function TodosActions({
  resetTodos,
  deletComplitedTodos,
  handleAll,
  handleActive,
  handleCompleted,
  completedTodos,
  itemsLeft,
}: {
  resetTodos: () => void;
  deletComplitedTodos: () => void;
  handleAll: () => void;
  handleActive: () => void;
  handleCompleted: () => void;
  completedTodos: boolean;
  itemsLeft: number;
}) {
  return (
    <Container>
      <P>{itemsLeft} Items left</P>
      <div>
        <CustomButton title="All" onClick={handleAll} disabled={false} />
        <CustomButton title="Active" onClick={handleActive} disabled={false} />
        <CustomButton
          title="Completed"
          onClick={handleCompleted}
          disabled={false}
        />
      </div>
      <div>
        <CustomButton
          title="Reset all todos"
          onClick={resetTodos}
          disabled={false}
        />
        <CustomButton
          title="Clear completed"
          onClick={deletComplitedTodos}
          disabled={!completedTodos}
        />
      </div>
    </Container>
  );
}

const P = styled.p`
  font-size: 1.5rem;
`;
