import React, { Component } from 'react';
import ColorIconSettings from './ColorIconSettings';

export default class ColorIcons extends Component {
    _toggleColorOptions(i){
        this.props.toggleColorOptions(i)
    }
    render() {
        const {color, i} = this.props
        return (
            <div className="color-icon-container">
                <button 
                className="color-icon" 
                onClick={this._toggleColorOptions.bind(this, i)}
                style={color.style}/>
                <ColorIconSettings 
                    setBoardColor={this.props.setBoardColor}
                    color={this.props.color}
                    i={this.props.i}
                    deleteColor={this.props.deleteColor}
                />
            </div>
        )
    }
}