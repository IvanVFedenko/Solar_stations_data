import React, {useEffect}  from 'react';
import { connect } from 'react-redux';
import { data } from '../store/store';
import { getDataThunk } from '../store/actions';
import ShownData from '../components/shown-data';
import { MyStore } from '../types';


const Dashboard: React.FC = (props: any ) => {
  // useEffect(() => { 
  //   const interval = setInterval (() => 
  //     {props.getDataThunk() }, 50000);
  //     return () => clearInterval(interval);
  // }, []);

  useEffect(() => { props.getDataThunk() }, []);


  return (
    <>
    <h3>This is dashboardComponent</h3>
    <ShownData 
        data={props.data}
    />
    </>
  );
}

const mapStatetoProps = (state: { data: any; }) => ({
  data: data(state),
});

const mapDispatchToProps = {
  getDataThunk,                        //equal --> "getDataThunk: getDataThunk();"
}

export default connect(mapStatetoProps, mapDispatchToProps) (Dashboard);