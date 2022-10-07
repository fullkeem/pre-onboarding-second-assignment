import styled from 'styled-components';

const reuseButton = ({ background, text }: any) => {
  return <Button background={background}>{text}</Button>;
};

const Button = styled.button`
  display: inline-block;
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

export default reuseButton;
