/**
 * Created by tdzl2_000 on 2015-09-26.
 */
import React from 'react';

export default class TabView extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            index : props.activeIndex || 0
        }
    }
    select(i){
        this.setState({
            index: i
        })
    }
    render(){
        return (
            <div className="tab-view">
                <div className="tab-view-header">
                    {
                        this.props.children.map((v, i)=>{
                            return (
                                <div className={["tab-view-tab", (i == this.state.index)?"active":""].join(' ')}
                                     onClick={()=>this.select(i)}
                                    >
                                    {v.props.title}
                                </div>
                            )
                        })
                    }
                </div>
                {
                    this.props.children[this.state.index]
                }
            </div>
        )
    }
}

TabView.Element = class extends React.Component
{
    render(){
        return (
            <div className="tab-view-element">
                {this.props.children}
            </div>
        )
    }
}