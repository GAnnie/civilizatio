/**
 * Created by tdzl2_000 on 2015-09-26.
 */
import {ViewModel} from 'redux-viewmodel';

import ProduceListViewModel from './plan/produce';
import PopulationViewModel from './population';

let _instance;

export default class RootViewModel extends ViewModel
{
    static get instance(){
        _instance = _instance || new RootViewModel();
        return _instance;
    }
    static get defaultState(){
        return {
            produce:  ProduceListViewModel.defaultState,
            population: PopulationViewModel.defaultState,
        }
    }
    get produce(){
        return this._produce = this._produce || this.getSubViewModel('produce', ProduceListViewModel);
    }
    get population(){
        return this._population = this._population || this.getSubViewModel('population', PopulationViewModel);
    }
    tick(state){
        return state;
    }
}

setInterval(RootViewModel.instance.dispatch('tick'), 1000);