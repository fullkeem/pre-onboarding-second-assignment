import { BtnPropsData } from '../../interface';
import styled from 'styled-components';

interface ExpandBtnPropsData extends React.HTMLAttributes<HTMLButtonElement>, BtnPropsData {}

const Buttons = ({ background, text, ...props }: ExpandBtnPropsData) => {
  return (
    <>
      <Button background={background} {...props}>
        {text}
      </Button>
    </>
  );
};

const Button = styled.button<{ background: string }>`
  display: flex;
  padding: 10px 15px;

  background-color: ${props => props.background};
  border: 0;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  text-decoration: none;

  transition: box-shadow 200ms ease-out;

  &:hover {
    cursor: pointer;
  }
`;

export default Buttons;
