import React from 'react';
import Dashboard from './containers/dashboard';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Solar station data</h1>
      <Dashboard />
    </div>
  );
}

export default App;
