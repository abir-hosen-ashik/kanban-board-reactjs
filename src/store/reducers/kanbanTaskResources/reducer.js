import produce from 'immer';
import * as types from './types';

const tasksState = {
    taskList: [],
    task_form: {
        name: '',
        description: '',
    },
    message: {
        success: '',
        failed: ''
    }
}

export const tasks = (state = tasksState, action) => {
    const { type, payload } = action;

    return produce(state, (draft) => {
        switch (type) {

            case types.SET_TASK_FORM:
                draft.task_form = payload
                break;

            case types.ADD_TASK:
                draft.taskList.push(payload)
                break;

            case types.SET_TASK_LIST:
                draft.taskList = payload
                break;

            case types.REMOVE_TASK:
                draft.taskList = []
                break;

            default:
                return state;
        }
    });
}