import styled from 'styled-components';
import { BsZoomIn } from 'react-icons/bs';

const ZoomIn = () => {
  return (
    <GraphZoom>
      그래프확대 <BsZoomIn />
    </GraphZoom>
  );
};

const GraphZoom = styled.div``;

export default ZoomIn;
