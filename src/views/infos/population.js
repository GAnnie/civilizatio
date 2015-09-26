/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

import "./population.less";

export default class PopulationInfo extends React.Component
{
    render(){
        let population = this.props.population;
        let total = population.length;
        let dry = population.reduce((c, v)=>{
            return (!v.working)?c+1:c;
        }, 0);
        let learning = population.reduce((c, v)=>{
            return (v.working && v.working.type==='learn')?c+1:c;
        }, 0);
        let working = population.reduce((c, v)=>{
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
