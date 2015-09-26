/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import {ViewModel, ListViewModel} from 'redux-viewmodel';

import RootViewModel from '../root.js';

import IntegerViewModel from '../base/integer';

class ProduceViewModel extends ViewModel{
    get maxWorkers(){
        return this.getSubViewModel('maxWorkers', IntegerViewModel);
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