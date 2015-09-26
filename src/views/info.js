/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

import TabView from './tabview';

import ResourceInfo from './infos/resource';
import PopulationInfo from './infos/population';

export default class Info extends React.Component
{
    render(){
        return (
            <div className="info">
                <TabView>
                    <TabView.Element title="资源">
                        <ResourceInfo />
                    </TabView.Element>
                    <TabView.Element title="人口">
                        <PopulationInfo />
                    </TabView.Element>
                </TabView>
            </div>
        )
    }
}