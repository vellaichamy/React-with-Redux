import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



// import App from './components/App'
import configureStore from './configureStore';
// import App from './19/components/App';
// import App from './18/components/App';
import App from './17/components/App';
// import App from './14/components/App';
// import App from './13/App';
// import App from './12/App';
// import App from './10/components/App';
// import App from './09/components/App';
// import App from './08/components/App';
// import App from './07/components/App';
// import App from './06/Icons';
// import App from './06/Determining';
// import App from './06/PassingState';
// import App from './06/LifecycleMethods';
// import App from './05/StateReactComponents';
// import App from "./03/CommunicatingWithProps";
// import App from "./02/Converting";
// import App from './Converting';
// import App from "./App";

// if (module.hot) {
//   module.hot.accept();
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// 17
import reducers from './17/reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

