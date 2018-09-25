import React, { Component } from 'react';

export default class ColorIconSettings extends Component {
    _setBoardColor(i){
        this.props.setBoardColor(i)
    }
    _deleteColor(i){
        this.props.deleteColor(i)
    }
    render() {
        const {color, i} = this.props
        return(
            <div className="color-icon-settings-container">
                {
                    color.toggle ? 
                        <div className="color-icon-settings">
                            <h4 className="color-name">{color.style.backgroundColor}</h4>
                            <button 
                            className="set-background-btn"
                            onClick={this._setBoardColor.bind(this, i)}>
                            Set board color
                            </button>
                            <button 
                            className="delete-color"
                            onClick={this._deleteColor.bind(this, i)}>
                            Delete color
                            </button>
                        </div> 
                    : null
                }
            </div>
        )
    }
}