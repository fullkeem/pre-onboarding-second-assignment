import { Route, Routes } from 'react-router-dom';
import DataGraph from './components/dataGraph/DataGraph';
import SensorList from './components/sensorList/SensorList';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SensorList />} />
        <Route path='/graph' element={<DataGraph />} />
      </Routes>
    </>
  );
};

export default App;
