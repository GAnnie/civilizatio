/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';
import * as ProduceString from '../../language/produce-strings.json';

import "./produce.less";

const mockupData = [
    {
        name: 'gatherFruits',
        maxWorkers: 1
    }
];

export default class ProducePlan extends React.Component
{
    render(){
        return (
            <ul className="produce-plan">
                {
                    mockupData.map(v=>(
                        <li
                            key={v.name}
                            className="produce-plan-item"
                            >
                            <span className="produce-name">{v.name}</span>
                            <span className="produce-max-workers">{v.maxWorkers}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}