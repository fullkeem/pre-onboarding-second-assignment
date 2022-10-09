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
  height: 36px;
  margin-top: 10px;
  padding: 10px 15px;

  background-color: ${props => props.background};
  border: 0;
  border-radius: 6px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export default Buttons;
