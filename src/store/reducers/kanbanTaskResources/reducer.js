import produce from 'immer';
import { task_list } from '../../../asset/data';
import * as types from './types';

const tasksState = {
    taskList: [],
    task_form: {
        id: '',
        name: '',
        description: '',
        status: 'todo'
    },
    message: {
        success: '',
        failed: ''
    },
    loader: false,
    fetch_list: false,
}

export const tasks = (state = tasksState, action) => {
    const { type, payload, meta } = action;

    return produce(state, (draft) => {
        switch (type) {

            case types.SET_TASK_FORM:
                draft.task_form = payload
                break;

            case types.ADD_TASK:
                draft.loader = true
                break;

            case types.ADD_TASK_SUCCESS:
                draft.loader = false
                draft.fetch_list = true
                break;

            case types.ADD_TASK_FAILED:
                draft.loader = false
                break;

            case types.SET_TASK_LIST:
                draft.fetch_list = false
                draft.loader = true
                break;

            case types.SET_TASK_LIST_SUCCESS:
                draft.taskList = payload.content
                draft.loader = false
                break;

            case types.SET_TASK_LIST_FAILED:
                draft.loader = false
                break;

            case types.UPDATE_TASK:
                draft.loader = true
                break;

            case types.UPDATE_TASK_SUCCESS:
                draft.loader = false
                draft.fetch_list = true
                break;

            case types.UPDATE_TASK_FAILED:
                draft.loader = false
                break;

            case types.REMOVE_TASK:
                draft.loader = true
                break;

            case types.REMOVE_TASK_SUCCESS:
                draft.loader = false
                draft.fetch_list = true
                break;

            case types.REMOVE_TASK_FAILED:
                draft.loader = false
                break;

            default:
                return state;
        }
    });
}