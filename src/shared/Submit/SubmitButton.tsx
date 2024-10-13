import styled from 'styled-components';

export default function SubmitButton() {
  return <Button>Submit</Button>;
}

const Button = styled.button`
  padding: 1rem 2.5rem;
  background-color: var(--color-dark-gray);
  border: 1px solid var(--color-dark-gray);
  border-radius: 10rem;
  box-shadow: var(--shadow-gray);
  font-size: 2rem;
  color: var(--color-white);
  transition: 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
  }
  &:active {
    transform: translateY(0.1rem);
  }
`;
