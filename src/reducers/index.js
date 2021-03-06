import { combineReducers } from 'redux';

// import all reducers
import patientReducer from './patientReducer';
import calReducer from './calReducer';
import logReducer from './logReducer';
import createAccountReducer from './createAccountReducer';
import settingsReducer from './settingsReducer';
import toDoListReducer from './toDoListReducer';
// import nomReducer2 from './reducer2';
// etc

const rootReducer = combineReducers({
  patients: patientReducer,
  cal: calReducer,
  log: logReducer,
  create: createAccountReducer,
  settings: settingsReducer,
  task: toDoListReducer,
});

export default rootReducer;
