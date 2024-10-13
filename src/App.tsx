import styled from 'styled-components';
import Container from './entities/Container';
import GlobalStyles from './styles/GlobalStyles';
import Header from './shared/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>MindBoxTODO</Header>
        <Container />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  background-color: var(--color-gray);
`;

export default App;
