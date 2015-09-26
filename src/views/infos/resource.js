/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';
import * as ResourceStrings from '../../language/resouce-strings.json';

import "./resource.less";

const mockupData = [
    {
        name: 'food',
        count: 100
    },
    {
        name: 'wood',
        count: 10
    },
    {
        name: 'woodPlate',
        count: 10
    },
    {
        name: 'ironOre',
        count: 10
    },
];

export default class ResourceInfo extends React.Component
{
    render(){
        return (
            <ul className="resource-info">
                {
                    mockupData.map(v=>(
                        <li
                            key={v.name}
                            className="resource-info-item">
                            <span className="resource-name">{ResourceStrings[v.name]}</span>
                            :
                            <span className="resource-count">{v.count}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}