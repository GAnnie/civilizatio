/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import {ViewModel, ListViewModel} from 'redux-viewmodel';

import RootViewModel from '../root.js';

class ProduceViewModel extends ViewModel{
    increment(state){
        return {
            ...state,
            maxWorkers: state.maxWorkers + 1
        }
    }
    decrement(state){
        if (state.maxWorkers > 0) {
            return {
                ...state,
                maxWorkers: state.maxWorkers - 1
            }
        }
        return state;
    }
    setValue(state, val){
        return {
            ...state,
            maxWorkers: val
        }
    }
}

export default class ProduceListViewModel extends ListViewModel
{
    static get instance(){
        return RootViewModel.instance.produce;
    }
    static get defaultState(){
        return [
            {
                key: 'gatherFruits',
                maxWorkers: 1
            },
            {
                key: 'lumber',
                maxWorkers: 0
            }
        ];
    }
    getItemByKey(key){
        return super.getItemByKey(key, ProduceViewModel);
    }
}