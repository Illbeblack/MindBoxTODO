import styled from 'styled-components';

export default function CustomButton({
  title,
  onClick,
  disabled,
}: {
  title: string;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
}

const Button = styled.button`
  padding: 1rem 2rem;
  margin: 1rem;

  border: 1px solid var(--color-dark-gray);
  border-radius: 10rem;

  font-size: 1.5rem;
  color: var(--color-dark-gray);
  transition: 0.1s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-0.1rem);
  }
  &:active {
    transform: translateY(0.1rem);
  }
`;
