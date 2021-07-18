import React from 'react';
import ReactDOM from 'react-dom';

import App from './06/Icons';
// import App from './06/Determining';
// import App from './06/PassingState';
// import App from './06/LifecycleMethods';
// import App from './05/StateReactComponents';
// import App from "./03/CommunicatingWithProps";
// import App from "./02/Converting";
// import App from './Converting';
// import App from "./App";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
