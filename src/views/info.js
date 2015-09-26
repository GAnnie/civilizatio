/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

import TabView from './tabview';

export default class Info extends React.Component
{
    render(){
        return (
            <div className="info">
                <TabView>
                    <TabView.Element title="资源">
                        这里是资源页面
                    </TabView.Element>
                    <TabView.Element title="人口">
                        这里是人口页面
                    </TabView.Element>
                </TabView>
            </div>
        )
    }
}