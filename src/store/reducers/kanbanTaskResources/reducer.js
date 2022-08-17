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

            case types.UPDATE_TASK:
                console.log('need to update', payload)
                if (draft.taskList.length) {
                    let objIndex = draft.taskList.findIndex((obj => obj.id == payload.id))
                    draft.taskList[objIndex].status = payload.state
                }
                console.log('draft.taskList: ', draft.taskList)
                break;

            case types.REMOVE_TASK:
                // draft.taskList = []
                console.log(payload)
                let objIndex = draft.taskList.findIndex((obj => obj.id == payload))
                draft.taskList.splice(objIndex, 1);
                break;

            default:
                return state;
        }
    });
}