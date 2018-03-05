import { combineReducers } from 'redux';
import entities from './entities/entities-reducer';
import ui from './ui/ui-reducer';

export default combineReducers({
  entities,
  ui
});
