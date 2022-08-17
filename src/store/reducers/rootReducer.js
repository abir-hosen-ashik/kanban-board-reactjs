import { combineReducers } from 'redux';
import { tasks } from './kanbanTaskResources';

const rootReducer = combineReducers({
    tasks
});

export default rootReducer