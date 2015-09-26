/**
 * Created by tdzl2_000 on 2015-09-26.
 */
import {ViewModel} from 'redux-viewmodel';

import ProduceListViewModel from './plan/produce';

let _instance;

export default class RootViewModel extends ViewModel
{
    static get instance(){
        _instance = _instance || new RootViewModel();
        return _instance;
    }
    static get defaultState(){
        return {
            produce:  ProduceListViewModel.defaultState
        }
    }
    get produce(){
        return this._produce = this._produce || this.getSubViewModel('produce', ProduceListViewModel);
    }
}
