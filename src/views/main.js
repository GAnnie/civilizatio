/**
 * Created by tdzl2_000 on 2015-09-26.
 */
import React from 'react';

import TabView from './tabview';

import ProducePlan from './plans/produce'

export default class Main extends React.Component
{
    render(){
        return (
            <div className="main">
                <TabView>
                    <TabView.Element title="生产">
                        <ProducePlan produce={this.props.produce} population={this.props.population}/>
                    </TabView.Element>
                    <TabView.Element title="设施">
                    </TabView.Element>
                    <TabView.Element title="科研">
                    </TabView.Element>
                    <TabView.Element title="伟业">
                    </TabView.Element>
                </TabView>
            </div>
        )
    }
}