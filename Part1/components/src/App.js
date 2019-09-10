import React from 'react';
import './App.css';

import Header from './Header';
import ColorBox from './ColorBox';
import ColorViewer from './ColorViewer';

function App() {
  return (
    <div className="App">

      
      <div className="section">
        <div>Functional Component</div>
        <div>
          <Header content="Hello" />
        </div>
      </div>

      <div className="section">
        <div>Class Component</div>
        <div>
          <ColorBox />
        </div>
      </div>

      <div className="section">
        <div>Composable Components</div>
        <div>
          <ColorViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
