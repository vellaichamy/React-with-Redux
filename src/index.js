import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import configureStore from './configureStore';

// import App from './21/components/App';

import reducers from './19/reducers';
import App from './19/components/App';
const store = createStore(reducers, applyMiddleware(thunk));

// import rootReducer from './18/reducers';
// import reducers from './18/reducers';
// import App from './18/components/App';
// const store = createStore(reducers, applyMiddleware(thunk));

// import rootReducer from './17/reducers';
// import reducers from './17/reducers';
// import App from './17/components/App';
// const store = createStore(rootReducer);

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

// 18

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import App from './components/App';
// import reducers from './reducers';

// 19
// const store = createStore(reducers, applyMiddleware(thunk));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector('#root')
// );

// 17
// createStore(reducers
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
// ReactDOM.render(<App />, document.querySelector('#root'));
