import { combineReducers } from 'redux';
import students from './students-reducer';
import awards from './awards-reducer';

export default combineReducers({
  students,
  awards
});
