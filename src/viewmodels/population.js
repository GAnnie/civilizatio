/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import {ViewModel, ListViewModel} from 'redux-viewmodel';

import RootViewModel from './root.js';


class PeopleViewModel extends ViewModel
{
}

export default class PopulationViewModel extends ListViewModel
{
    static get instance(){
        return RootViewModel.instance.population;
    }
    static get defaultState(){
        return [
            {
                age: 3*3600,
                working: false,
            },
            {
                age: 12*3600,
                working: false,
            },
            {
                age: 13*3600,
                working: {
                    type: 'work',
                    name: 'gatherFruits',
                    startAt: -2,
                    overAt: 6,
                }
            }
        ];
    }
    getItemByKey(key){
        return super.getItemByKey(key, PeopleViewModel);
    }
}