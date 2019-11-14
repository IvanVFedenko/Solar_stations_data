import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { MyStore } from '../types';
interface shownDataProps {
  data: any,
}


const ShownData: React.FC<shownDataProps> = (props)  => {
  const now = 100;
  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
  return (
    <div style={{width:'250px'}}>{progressInstance}</div>
  )
}

export default ShownData;