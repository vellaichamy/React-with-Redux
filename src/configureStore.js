import { createStore, combineReducers } from 'redux';
import { messages, logs } from './reducers';

export default () => {
  const rootReducer = combineReducers({
    messages,
    logs
  });

  return createStore(rootReducer);
};
