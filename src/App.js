import React from 'react';
import './App.css';
import Layout from './Containers/Layout';

function App() {
  return (
    <div className="App"
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: "deepskyblue"
      }}>
      <Layout></Layout>
    </div>
  );
}

export default App;
