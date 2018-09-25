import React, { Component } from 'react';
import ColorIcons from './ColorIcons';

export default class BoardSettings extends Component {
    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this)
    }
    _onChange(e) {
        this.props.onChange(e)
    }
    render(){
        return(
            <div className="board-settings">
                {
                    this.props.isEditingBoard ?
                        <div className="settings">
                            <div className="settings-header">
                                <button 
                                className="exit-settings"
                                onClick={this.props.settingsToggle}>
                                x
                                </button>
                                <div className="settings-container">
                                    <h3 className="settings-container-tag">Change your board color...</h3>
                                    <input 
                                    className="settings-container-input" 
                                    placeholder="enter a hex #"
                                    value={this.props.boardColor} 
                                    onChange={this._onChange}/>
                                    <button 
                                    className="settings-container-add"
                                    onClick={this.props.addColor}>
                                    +
                                    </button>
                                    <div className="color-list">
                                        {
                                            this.props.boardColorArray.map((color, i) => {
                                                return <ColorIcons
                                                    key={i} 
                                                    color={color}
                                                    i={i}
                                                    setBoardColor={this.props.setBoardColor}
                                                    toggleColorOptions={this.props.toggleColorOptions}
                                                    deleteColor={this.props.deleteColor}
                                                />
                                            })
                                        }
                                    </div>
                                </div>
                                    {/* <button className="settings-container-btn">Change board</button> */}
                            </div>
                        </div>
                    : 
                    <button 
                    className="settings-toggle"
                    onClick={this.props.settingsToggle}>
                    ...
                    </button>
                }
            </div>
        )
    }
}