/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';
import * as ProduceString from '../../language/produce-strings.json';

import "./produce.less";

import ProduceListViewModel from "../../viewmodels/plan/produce.js";

import Editable from "../editable.js";

let produce = ProduceListViewModel.instance;

export default class ProducePlan extends React.Component
{
    render(){
        var popuCount = this.props.population.reduce((state, v)=>{
            if (v.working && v.working.type==='work'){
                state[v.working.name] = (state[v.working.name] || 0) + 1;
            }
            return state;
        }, {});
        return (
            <ul className="produce-plan">
                {
                    this.props.produce.map(v=>(
                        <li
                            key={v.key}
                            className="produce-plan-item"
                            >
                            <span className="produce-name">{ProduceString[v.key]}</span>
                            <span className="produce-workers">{popuCount[v.key] || 0}</span>/
                            <Editable
                                onEditOver={(newValue)=>{
                                    newValue = parseInt(newValue);
                                    if (isNaN(newValue)){
                                        return;
                                    }
                                    produce.getItemByKey(v.key).maxWorkers.dispatch("setValue", newValue)
                                }}
                                className="produce-max-workers"
                                value={v.maxWorkers}
                                />
                            <button onClick={()=>produce.getItemByKey(v.key).maxWorkers.dispatch("increment")}>+</button>
                            <button onClick={()=>produce.getItemByKey(v.key).maxWorkers.dispatch("decrement")}>-</button>
                        </li>
                    ))
                }
            </ul>
        )
    }
}