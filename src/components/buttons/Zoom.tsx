import styled from 'styled-components';
import { BsZoomIn, BsZoomOut } from 'react-icons/bs';

const Zoom = () => {
  return (
    <>
      <GraphZoom>
        <button>
          그래프확대 <BsZoomIn />
        </button>
        <button>
          그래프축소 <BsZoomOut />
        </button>
      </GraphZoom>
    </>
  );
};

const GraphZoom = styled.div`
  display: flex;
  flex-direction: column;

  button {
    padding: 0;

    background: transparent;
    border: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Zoom;
