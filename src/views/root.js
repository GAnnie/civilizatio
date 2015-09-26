/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

import Main from './main';
import Info from './info';

import "./root.less";

export default class AppRoot extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="root">
                <Main />
                <Info />
            </div>
        );
    }
}