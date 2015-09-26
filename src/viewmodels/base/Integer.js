/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import {ViewModel} from 'redux-viewmodel';

export default class IntegerViewModel extends ViewModel{
    increment(state){
        return state + 1;
    }
    decrement(state){
        return state - 1;
    }
    setValue(state, val){
        return val;
    }
}