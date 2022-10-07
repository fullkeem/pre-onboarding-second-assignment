import { Link } from 'react-router-dom';
import Button from '../buttons/reuseButton';

const SensorList = () => {
  return (
    <div>
      SensorList
      <Link to='/graph'>
        <Button background='#36A2EB' text='Graph' />
      </Link>
    </div>
  );
};

export default SensorList;
