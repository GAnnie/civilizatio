/**
 * Created by tdzl2_000 on 2015-09-26.
 */

import React from 'react';

export default class Editable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
    }
    startEdit(){
        this.setState({
            editing: true
        })
    }
    onEditOver(e){
        let value = e.target.value;
        this.setState({
            editing: false
        });
        let f = this.props.onEditOver;
        f && f(value);
    }
    render(){
        if (this.state.editing){
            return (
                <input
                    ref={c=>{
                        if (c){
                            c = c.getDOMNode();
                            c.focus()
                            c.select(0, c.value.length);
                        }
                    }}
                    onBlur={(e)=>this.onEditOver(e)}
                    className={this.props.className}
                    defaultValue={this.props.value} />
            );
        }
        return (
            <span
                className={this.props.className}
                onClick={()=>this.startEdit()}
                >
                {this.props.value}
            </span>
        );
    }
}