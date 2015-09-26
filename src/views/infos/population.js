/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

import "./population.less";

const mockupData = [
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
]

export default class PopulationInfo extends React.Component
{
    render(){
        let total = mockupData.length;
        let dry = mockupData.reduce((c, v)=>{
            return (!v.working)?c+1:c;
        }, 0);
        let learning = mockupData.reduce((c, v)=>{
            return (v.working && v.working.type==='learn')?c+1:c;
        }, 0);
        let working = mockupData.reduce((c, v)=>{
            return (v.working && v.working.type==='work')?c+1:c;
        }, 0);

        return (
            <ul className="population-info">
                <li className="population-info-item">总人口：{total}</li>
                <li className="population-info-item">脱水中：{dry}</li>
                <li className="population-info-item">学习中：{learning}</li>
                <li className="population-info-item">工作中：{working}</li>
            </ul>
        )
    }
}
